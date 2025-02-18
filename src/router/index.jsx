import { Route, Routes } from "react-router-dom";
import {
  AboutPage,
  AddBankPage,
  DepositPage,
  HistoryPage,
  HomePage,
  LoginPage,
  MemberPage,
  PersonalPage,
  ProfilePage,
  RegisterPage,
  RevenuePage,
  RollPage,
  StatementPage,
  TermsPage,
  VipPage,
  WithdrawPage,
} from "../pages";
import RouteGuard from "./components/RouteGuard";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<RouteGuard />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="roll" element={<RollPage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="member" element={<MemberPage />} />
        <Route path="revenue" element={<RevenuePage />} />
        <Route path="statement" element={<StatementPage />} />
        <Route path="terms" element={<TermsPage />} />
        <Route path="deposit" element={<DepositPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="withdraw" element={<WithdrawPage />} />
        <Route path="add-bank" element={<AddBankPage />} />
        <Route path="vip" element={<VipPage />} />
        <Route path="personal" element={<PersonalPage />} />
      </Route>
    </Routes>
  );
}

export default Router;
