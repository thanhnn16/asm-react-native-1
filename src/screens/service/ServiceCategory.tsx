import {useEffect, useState} from 'react';
import {
  useGetServicesByTypeQuery,
  useGetServiceTypesQuery,
} from '../../api/services/serviceTypes/serviceType.service.ts';
import {Pressable, SafeAreaView, Text, View} from 'react-native';
import {
  bottomBooking,
  pickerSelectStyles,
  styles,
  textStyles,
} from '../../assets/styles/MyStyles.tsx';
import RNPickerSelect from 'react-native-picker-select';
import {ServiceType} from '../../api/services/serviceTypes/serviceType.type.ts';
import {LoadingModal} from '../../components/Modal.tsx';
import {Service} from '../../api/services/service.type.ts';

import DropdownIcon from '../../assets/images/icons/input_field_icons/arrow-bottom.svg';
import TitleDesSection from '../../components/TitleDesSection.tsx';

// @ts-ignore
const ServiceCategory = ({navigation}) => {
  const [serviceTypes, setServiceTypes] = useState<ServiceType[]>([]);
  const [services, setServices] = useState<Service[]>([]);

  const [selectedServiceType, setSelectedServiceType] = useState<string | null>(
    '',
  );

  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const {data, isFetching} = useGetServiceTypesQuery();
  const {data: servicesData} = useGetServicesByTypeQuery(selectedServiceType);

  const onSelectService = (value: string) => {
    const service = services.find(service => service._id === value);
    if (service) {
      setSelectedService(service);
    }
  };

  const handleBooking = () => {
    // @ts-ignore
    const serviceId = selectedService._id;
    console.log(serviceId);
    navigation.navigate('BookAppointment', {serviceId});
  };

  useEffect(() => {
    if (data) {
      setServiceTypes(data);
    }
  }, [data]);

  useEffect(() => {
    if (Array.isArray(servicesData)) {
      setServices(servicesData);
    }
  }, [servicesData]);

  const renderDetail = () => {
    return (
      <View>
        <Text style={[textStyles.h3, textStyles.medium]}>Chi tiết</Text>
        <TitleDesSection
          title={'Thông tin dịch vụ'}
          description={
            selectedService && selectedService.description !== null
              ? selectedService.description.length > 100
                ? selectedService.description.substring(0, 100) + '...'
                : selectedService.description.length === 0
                ? 'Không có mô tả'
                : selectedService.description
              : 'Không có mô tả'
          }
        />
        <TitleDesSection
          title={'Thông tin đặt lịch'}
          description={
            'Dịch vụ này có sẵn 24/7. Vui lòng bấm đặt lịch để xem lịch còn trống của chúng tôi.'
          }
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.contentContainer}>
        <Text style={textStyles.secondary}>Loại dịch vụ</Text>
        <RNPickerSelect
          style={{
            ...pickerSelectStyles,
            iconContainer: {
              top: 20,
              right: 12,
            },
          }}
          useNativeAndroidPickerStyle={false}
          Icon={() => {
            return (
              <DropdownIcon
                style={{
                  width: 24,
                  alignSelf: 'center',
                }}
              />
            );
          }}
          placeholder={{label: ' -- Chọn loại dịch vụ -- ', value: null}}
          onValueChange={value => {
            setServices([]);
            setSelectedService(null);
            setSelectedServiceType(value);
          }}
          InputAccessoryView={null}
          doneText={'Xong'}
          items={serviceTypes?.map(serviceType => ({
            label: serviceType.name,
            value: serviceType._id,
          }))}
        />
        <Text style={textStyles.secondary}>Dịch vụ</Text>
        <RNPickerSelect
          style={{
            ...pickerSelectStyles,
            iconContainer: {
              top: 20,
              right: 12,
            },
          }}
          useNativeAndroidPickerStyle={false}
          Icon={() => {
            return (
              <DropdownIcon
                style={{
                  width: 24,
                  alignSelf: 'center',
                }}
              />
            );
          }}
          placeholder={{label: ' -- Chọn dịch vụ -- ', value: null}}
          onValueChange={value => {
            if (value) {
              onSelectService(value);
            } else {
              setSelectedService(null);
            }
          }}
          InputAccessoryView={null}
          disabled={selectedServiceType === null}
          doneText={'Xong'}
          items={
            services
              ? services?.map(service => ({
                  label: service.name,
                  value: service._id,
                }))
              : []
          }
        />
        {selectedService ? renderDetail() : null}
      </View>
      {selectedService ? (
        <View style={bottomBooking.container}>
          <Pressable
            onPress={handleBooking}
            style={bottomBooking.buttonContainer}>
            <Text style={bottomBooking.buttonText}>Đặt ngay</Text>
          </Pressable>
        </View>
      ) : null}
      <LoadingModal isVisible={isFetching} />
    </SafeAreaView>
  );
};

export default ServiceCategory;
