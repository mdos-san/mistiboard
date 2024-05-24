import { useCallback, useState } from "react";
import Input from "./Input";
import Panel from "./Panel";
import SmallContainer from "./SmallContainer";
import SubmitButton from "./SubmitButton";

type SignInCardProps = {
  onSignIn: (email: string, password: string) => void | Promise<void>;
};

const SignInCard = ({ onSignIn }: SignInCardProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = useCallback(
    (newEmail: string) => setEmail(newEmail),
    [],
  );
  const handlePasswordChange = useCallback(
    (newPassword: string) => setPassword(newPassword),
    [],
  );
  const handleSubmit = useCallback(
    () => onSignIn(email, password),
    [email, password],
  );

  return (
    <SmallContainer>
      <Panel>
        <h1>MistiBoard</h1>
        <Input
          id="email"
          type="email"
          label="Email"
          onChange={handleEmailChange}
        />
        <Input
          id="password"
          type="password"
          label="Mot de passe"
          onChange={handlePasswordChange}
        />
        <SubmitButton label="Connexion" onClick={handleSubmit} />
      </Panel>
    </SmallContainer>
  );
};

export default SignInCard;
