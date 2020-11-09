import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    margin: 20px 20px;
`;

export const Content = styled.Text`
    color: #fff;
`;

export const Event = styled.View`
    border-radius: 16px;
    /* border: 3px solid #35605A; */
    margin-top: 10px;
    background-color: #35605A;
    border: 3px solid #D8E4FF;
`;

export const EventList = styled.View`
    margin: 10px 10px;
`;

export const GoCreateEvent = styled.TouchableOpacity`
    /* position: absolute; */
    left: 0;
    bottom: 0;
    right: 0;
    background: #312e38;
    border-top-width: 1px;
    /* border-color: #232129; */
    padding: 16px 0 ${16 + getBottomSpace()}px;
    margin-top: 50px;

    display: flex;
    justify-content: center;
    flex-direction: row;
`;

export const GoCreateEventText = styled.Text`
    color: #fff;
    font-size: 18px;
    font-family: 'RobotoSlab-Regular';
    margin-left: 16px;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-family: 'RobotoSlab-Regular';
`;

export const Header = styled.View`
    align-items: center;
    margin-top: 30px;
`;

export const Strong = styled.Text`
    font-family: 'RobotoSlab-Medium';
    font-size: 16px;
`;