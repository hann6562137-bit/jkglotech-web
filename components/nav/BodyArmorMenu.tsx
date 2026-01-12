import { Link } from "@/i18n/routing";
import { topBarItems } from "../nav/navData";
import { getTranslations } from "next-intl/server";

function MenuButton({ label, isSelected, href }: { label: string, isSelected: boolean, href: string }) {
  return (
    <Link href={href} className={`font-aldrich text-[10px] md:text-[35px] text-white flex-1 flex items-center justify-center cursor-pointer py-1 xl:py-4
            ${isSelected ? 'border-b-3 xl:border-b-2 border-[#FFD900]' : 'border-b-3 xl:border-b-2 border-[#303030]'}`}>
      {label}
    </Link>
  );
}

export async function BodyArmorMenu({ currentMenu, menuNameKey = "bodyarmor" }: { currentMenu?: string, menuNameKey?: string }) {
  const bodyArmorMenuItems = topBarItems.find(
    (item) => item.nameKey === menuNameKey
  )?.subMenu;

  if (!bodyArmorMenuItems) return null;

  const t = await getTranslations("menu");

  return (
    <div className="w-full flex flex-row gap-2 xl:gap-10">
      {
        bodyArmorMenuItems.map((item) => (
          <MenuButton
            key={item.nameKey}
            label={t(item.nameKey)}
            isSelected={item.nameKey === currentMenu}
            href={item.link}
          />
        ))
      }
    </div>
  );
};