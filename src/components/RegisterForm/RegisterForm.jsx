import {
  FormContainer,
  FormLabel,
  Container,
  Span,
  FormTitle1,
  UserInput,
  UserBtn,
} from './RegisterForm.styled';
import { Oval } from 'react-loader-spinner';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/operations';
import { Notify } from 'notiflix';

export default function RegisterForm() {
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });
  const dispatch = useDispatch();

  const onSubmit = async (data, e) => {
    try {
      const { meta } = await dispatch(authOperations.registration(data));

      if (meta.rejectedWithValue) {
        Notify.failure(
          'Something went wrong, check the data entered and try again. )'
        );
        return;
      }
      Notify.success('Form successfully submitted :)');
      e.target.reset();
    } catch (error) {
      return error.message;
    }
  };

  return (
    <Container>
      <FormTitle1>Sign up</FormTitle1>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <FormLabel>
            <Span>Name</Span>
            <UserInput
              type="text"
              name="name"
              {...register(
                'name',
                { required: true },
                { pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$' }
              )}
            />
          </FormLabel>

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
            Sign up
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
}
