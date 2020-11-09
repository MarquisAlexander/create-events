import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 30px ${Platform.OS === 'android' ? 120 : 40}px;

`;

export const Title = styled.Text`
    font-size: 24px;
    color: #00120B;
    font-family: 'RobotoSlab-Medium';
    margin: 64px 0 24px;
`;

export const GoListEvents = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background: #35605A;
    border-top-width: 1px;
    border-color: #35605A;
    padding: 16px 0 ${16 + getBottomSpace()}px;

    display: flex;
    justify-content: center;
    flex-direction: row;
`;

export const GoListEventsText = styled.Text`
    color: #fff;
    font-size: 18px;
    font-family: 'RobotoSlab-Regular';
    margin-left: 16px;
`;