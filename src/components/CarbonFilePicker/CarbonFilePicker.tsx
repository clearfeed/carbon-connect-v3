import React, { useState } from "react";
import {
  DialogHeader,
  DialogTitle,
} from "@components/common/design-system/Dialog";
import BackIcon from "@assets/svgIcons/back-icon.svg";
import GithubForm from "./AuthForm";
import GithubFileSelector from "./FileSelector";
// import GithubLogo from "@assets/logos/github.svg";
import SettingsIcon from "@assets/svgIcons/settings-icon.svg";
import DownChevIcon from "@assets/svgIcons/down-chev-icon.svg";
import AddCircleIcon from "@assets/svgIcons/add-circle-icon.svg";
import DisconnectIcon from "@assets/svgIcons/disconnect-icon.svg";
import RefreshIcon from "@assets/svgIcons/refresh-icon.svg";
import UserIcon from "@assets/svgIcons/user-icon.svg";
import { Button } from "@components/common/design-system/Button";
import { IntegrationItemType } from "@utils/integrationModalconstants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/common/design-system/Dropdown";

export default function CarbonFilePicker({
  activeStepData,
  setActiveStep,
  onCloseModal,
}: {
  activeStepData?: IntegrationItemType;
  setActiveStep: (val: string) => void;
  onCloseModal: () => void;
}) {
  const [step, setStep] = useState<number>(1);

  return (
    <>
      <DialogHeader closeButtonClass="cc-hidden sm:cc-flex">
        <div className="cc-flex-grow cc-flex cc-gap-3 cc-items-center">
          <button
            className="cc-pr-1 cc-h-10 cc-w-auto cc-shrink-0"
            onClick={() => {
              if (step > 1) {
                setStep((prev) => prev - 1);
              } else {
                setActiveStep("INTEGRATION_LIST");
              }
            }}
          >
            <img
              src={BackIcon}
              alt="Lock"
              className="cc-h-[18px] cc-w-[18px]"
            />
          </button>
          <div className="cc-h-8 cc-w-8 sm:cc-h-14 sm:cc-w-14 cc-shrink-0 cc-bg-surface-white cc-rounded-lg cc-p-0.5 cc-shadow-e2">
            <div className="cc-h-full cc-w-full cc-bg-gray-50 cc-flex cc-items-center cc-justify-center cc-rounded-lg">
              <img
                src={activeStepData?.logo}
                alt="Github logo"
                className="cc-h-4 cc-w-4 sm:cc-h-8 sm:cc-w-8"
              />
            </div>
          </div>
          <DialogTitle className="cc-flex-grow cc-text-left">
            {activeStepData?.name}
          </DialogTitle>
          {step > 1 && (
            <>
              <Button
                size="sm"
                variant="gray"
                className="cc-rounded-xl cc-shrink-0 sm:cc-hidden"
              >
                <img
                  src={RefreshIcon}
                  alt="User Plus"
                  className="cc-h-[18px] cc-w-[18px] cc-shrink-0"
                />
              </Button>
              <AccountDropdown />
              <SettingDropdown />
            </>
          )}
        </div>
      </DialogHeader>
      {step === 1 && (
        <GithubForm
          onSubmit={() => {
            setStep(2);
          }}
        />
      )}
      {step === 2 && <GithubFileSelector />}
    </>
  );
}

const AccountDropdown = () => {
  const commonMenuConponent = () => {
    return (
      <DropdownMenuContent align="end" className="cc-w-[232px]">
        <DropdownMenuGroup>
          <DropdownMenuItem className="cc-border-b cc-border-outline-base_em cc-bg-surface-surface_1">
            <div>
              <p className="cc-text-xs cc-font-semibold cc-text-high_em">
                Kende Attila
              </p>
              <p className="cc-text-xxs cc-text-low_em cc-font-semibold">
                csilvers@verizon.net
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:cc-bg-surface-surface_1">
            <div>
              <p className="cc-text-xs cc-font-semibold cc-text-high_em">
                Rámai Ivette
              </p>
              <p className="cc-text-xxs cc-text-low_em cc-font-semibold">
                crowemojo@hotmail.com
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:cc-bg-surface-surface_1">
            <div>
              <p className="cc-text-xs cc-font-semibold cc-text-high_em">
                Fekete Csanád
              </p>
              <p className="cc-text-xxs cc-text-low_em cc-font-semibold">
                dowdy@yahoo.com
              </p>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="hover:cc-bg-surface-surface_1">
          <p className="cc-text-xs cc-font-semibold cc-text-info_em cc-flex-grow">
            Add Account
          </p>
          <img
            src={AddCircleIcon}
            alt="Add Circle Icon"
            className="cc-h-[18px] cc-w-[18px]"
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    );
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="gray"
            className="cc-font-semibold cc-px-0 cc-gap-3 sm:cc-min-w-[180px] cc-rounded-xl sm:cc-hidden"
          >
            <img
              src={UserIcon}
              alt="User Icon"
              className="cc-h-[18px] cc-w-[18px]"
            />
          </Button>
        </DropdownMenuTrigger>
        {commonMenuConponent()}
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="gray"
            className="cc-font-semibold cc-px-3 cc-gap-3 sm:cc-min-w-[180px] cc-rounded-xl cc-hidden sm:cc-flex"
          >
            <span className="cc-flex-grow cc-text-left">Kende Attila</span>
            <img
              src={DownChevIcon}
              alt="Down Chev Icon"
              className="cc-h-[18px] cc-w-[18px]"
            />
          </Button>
        </DropdownMenuTrigger>
        {commonMenuConponent()}
      </DropdownMenu>
    </>
  );
};

const SettingDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="sm"
          variant="gray"
          className="cc-rounded-xl cc-shrink-0 cc-px-0 cc-w-8"
        >
          <img
            src={SettingsIcon}
            alt="User Plus"
            className="cc-h-[18px] cc-w-[18px] cc-shrink-0"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="cc-w-[208px]">
        <DropdownMenuGroup>
          <DropdownMenuItem className="hover:cc-bg-surface-surface_1 cc-justify-between">
            Disconnect account
            <img
              src={DisconnectIcon}
              alt="Disconnect Icon"
              className="cc-h-[14px] cc-w-[14px] cc-shrink-0"
            />
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:cc-bg-surface-surface_1 cc-justify-between">
            Re-sync account
            <img
              src={RefreshIcon}
              alt="Refresh Icon"
              className="cc-h-[14px] cc-w-[14px] cc-shrink-0"
            />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
