import * as S from "./ErrorMessage.style";

const ErrorMessage = ({ message }) => {
  return <S.Message>{message}</S.Message>;
};

export default ErrorMessage;