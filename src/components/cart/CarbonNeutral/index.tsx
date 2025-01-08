import Image from "next/image";
import carbonNeutralIcon from "../../../../public/images/icon-carbon-neutral.svg";

export const CarbonNeutral = () => {
  return (
    <div className="flex gap-2 justify-center items-center py-4 bg-rose-100 rounded-lg">
      <Image src={carbonNeutralIcon} alt="Carbon neutral icon" />
      <p className="text-sm text-rose-900">
        This is a <span className="font-semibold">carbon-neutral</span> delivery
      </p>
    </div>
  );
};
