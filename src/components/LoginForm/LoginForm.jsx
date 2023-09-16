import {
  FormContainer,
  FormLabel,
  Container,
  Span,
  FormTitle1,
  UserInput,
  UserBtn,
} from 'components/RegisterForm/RegisterForm.styled';
import { Oval } from 'react-loader-spinner';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/operations';
import { Notify } from 'notiflix';

const LoginForm = () => {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const dispatch = useDispatch();

  const onSubmit = async (data, e) => {
    const res = await dispatch(authOperations.login(data));
    if (res.meta.rejectedWithValue) {
      Notify.failure(
        `We could not find such a user, please check the entered data`
      );
      return;
    }
    console.log(res);
    Notify.success(`We welcome you, ${res.payload.user.name} )`);
    e.target.reset();
  };

  return (
    <Container>
      <FormTitle1>Sign in</FormTitle1>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <FormLabel>
            <Span>Email</Span>
            <UserInput
              type="email"
              name="email"
              {...register('email', { required: true })}
            />
          </FormLabel>
          <FormLabel>
            <Span>Password</Span>
            <UserInput
              type="password"
              name="password"
              {...register('password', { required: true, minLength: 7 })}
            />
          </FormLabel>

          <UserBtn type="submit" disabled={!formState.isValid}>
            Sign in
            {formState.isSubmitting && (
              <Oval
                height="25"
                width="25"
                radius="9"
                color="#000000"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                visible={true}
                strokeWidth={6}
              />
            )}
          </UserBtn>
        </FormContainer>
      </form>
    </Container>
  );
};

export default LoginForm;
