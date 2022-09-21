import { useRef } from 'react';

const useForm = () => {
  const formRef = useRef();
  return [formRef.current];
};
export default useForm;
