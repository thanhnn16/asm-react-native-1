import React, { useEffect } from "react";
import { ActivityIndicator, Image, Modal, Text, View } from "react-native";
import { marginStyles, modalStyles, profileStyles } from "../assets/styles/MyStyles.tsx";
import { ModalCancelButton, ModalOkButton } from "./Button.tsx";

type SuccessModalProps = {
  isVisible: boolean;
  title: string;
  message: string;
};

export const SuccessModal: React.FC<SuccessModalProps> = ({
  isVisible,
  title,
  message: message,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <Modal animationType="fade" visible={isVisible} transparent={true} onRequestClose={() => {
    }}>
      <View style={modalStyles.modalContainer}>
        <View style={modalStyles.modalContent}>
          <Image
            style={modalStyles.modalImage}
            source={require('../../src/assets/images/icons/congrats.png')}
          />
          <Text style={modalStyles.modalTitle}>{title}</Text>
          <Text style={modalStyles.modalText}>{message}</Text>
          <ActivityIndicator size="large" />
        </View>
      </View>
    </Modal>
  );
};

type LogoutModalProps = {
  isVisible: boolean;
  onOkPress: () => void;
  onCancelPress: () => void;
};
export const MyLogoutModal: React.FC<LogoutModalProps> = ({
                                                            isVisible,
                                                            onOkPress,
                                                            onCancelPress
                                                          }) => {
  return (
    <Modal animationType="fade" transparent={true} visible={isVisible} onRequestClose={() => {
    }}>
      <View style={modalStyles.bottomModalContainer}>
        <View style={modalStyles.bottomModal}>
          <Text style={modalStyles.modalTitle}>Đăng xuất</Text>
          <Text style={modalStyles.modalText}>
            Bạn có chắc chắn muốn đăng xuất?
          </Text>
          <View style={[profileStyles.itemDivider, marginStyles.mt16]} />
          <View style={modalStyles.modalButtonContainer}>
            <ModalCancelButton
              style={modalStyles.bottomModalSecondaryButton}
              btnText="Hủy"
              onPress={() => {
                onCancelPress();
              }}
            />
            <ModalOkButton btnText="Đăng xuất" onPress={onOkPress} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

type LoadingModalProps = {
  isVisible: boolean;
  title?: string;
};

export const LoadingModal = ({ isVisible, title }: LoadingModalProps) => {
  return (
    <Modal animationType="fade" visible={isVisible} transparent={true} onRequestClose={() => {
    }}>
      <View style={modalStyles.modalContainer}>
        <View style={[modalStyles.modalContent, marginStyles.mv24]}>
          <ActivityIndicator size="large" style={marginStyles.mt32} />
          <Text style={[modalStyles.modalText, marginStyles.mt16, marginStyles.mb24]}>{title}</Text>
        </View>
      </View>
    </Modal>
  );
};
