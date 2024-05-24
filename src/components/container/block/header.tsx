import { Button } from "../../ui/button";
import wallet from "@/assets/template/wallet.svg";
import { WalletDialog } from "../dialog/wallet";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-2 px-5 md:px-10 lg:px-14 xl:px-16 2xl:px-20">
      <Link to={"/"}>
        <div className="flex items-center space-x-2">
          <img
            src="/logo-text.svg"
            alt="Nurika Logo"
            className="w-24 sm:w-28 md:w-32"
          />
        </div>
      </Link>

      <WalletDialog
        trigger={
          <Button className="space-x-2">
            <img src={wallet} alt="wallet" className="w-4 h-4" />{" "}
            <span>Connect Wallet</span>
          </Button>
        }
      />
    </header>
  );
}