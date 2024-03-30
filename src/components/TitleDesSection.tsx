import {Text, View} from 'react-native';
import {marginStyles, textStyles} from '../assets/styles/MyStyles.tsx';

const TitleDesSection = ({
  title,
  description,
}: {
  title: string;
  description: any;
}) => {
  return (
    <View style={marginStyles.mv8}>
      <Text style={[textStyles.h3, textStyles.medium]}>{title}</Text>
      <Text style={[textStyles.h6, textStyles.secondary, marginStyles.mt8]}>
        {description}
      </Text>
    </View>
  );
};

export default TitleDesSection;
