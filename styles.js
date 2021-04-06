import styled from "styled-components/native";

export const TopStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 38;
  text-align: center;
`;

export const OverLayContainer = styled.View`
  flex: 1;
  background-color: rgba(100, 40, 60, 0.4);
`;

export const BottomStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;
export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthTitle = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  border-bottom-width: 1px;
`;
export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #264b94;
  font-weight: bold;
  font-size: 18px;
`;

export const AuthOther = styled.Text`
  margin-top: 15px;
`;

export const ButtonStyledText = styled.Text`
  font-size: 20;
  color: #fff;
`;

export const Button = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  margin-top: 30px;
`;
