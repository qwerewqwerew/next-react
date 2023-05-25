import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import styles from "./Root.module.css";
const RootLayout = () => {
  return (
    <>
      <h1>RootLayout</h1>
      <MainNavigation />
      <main className={styles.content}>
        <Outlet />
      </main>
    </>
  );
};
export default RootLayout;
