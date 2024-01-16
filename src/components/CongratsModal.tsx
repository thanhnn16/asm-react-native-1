import React, { useState, useEffect } from 'react';
import { Modal, View, Text, ActivityIndicator } from 'react-native';

type CongratsModalProps = {
    isVisible: boolean;
    onClose: () => void;
    onCongrats: (params: any) => void;
    text: string; // Add text prop
};

const CongratsModal: React.FC<CongratsModalProps> = ({
    isVisible,
    onClose,
    onCongrats,
    text, // Destructure text prop
}) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleCongrats = async (params: any) => {
        setIsLoading(true);
        try {
            // Perform some async operation
            await onCongrats(params);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
            onClose();
        }
    };

    const handleModalClose = () => {
        if (!isLoading) {
            onClose();
        }
    };

    return (
        <Modal visible={isVisible} onRequestClose={handleModalClose}>
            <View>
                {isLoading ? (
                    <ActivityIndicator size="large" />
                ) : (
                    <View>
                        <Text>{text}</Text>
                    </View>
                )}
            </View>
        </Modal>
    );
};

export default CongratsModal;
