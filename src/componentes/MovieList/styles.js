import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  margin: 8px 0;
`;

export const MovieImage = styled.Image`
  width: 100px;
  height: 130px;
`;

export const Info = styled.View`
  height: 100px;
  margin-left: 16px;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const Year = styled.Text`
  color: #ccc;
  margin-top: 8px;
  font-size: 14px;
`;

export const Rating = styled.Text`
  color: #ff0;
  margin-top: 8px;
  font-size: 12px;
`;
