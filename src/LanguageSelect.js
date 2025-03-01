import { useTolgee } from "@tolgee/react";

export function LanguageSelect() {
  const tolgee = useTolgee(["language"]);

  return (
    <div>
      <select
        value={tolgee.getLanguage()}
        onChange={(e) => tolgee.changeLanguage(e.target.value)}
        className="bg-textBlue text-white p-1 text-medium rounded-lg"
      >
        <option value="en">EN</option>
        <option value="cs-CZ">CZ</option>
        <option value="sk">SK</option>
      </select>
    </div>
  );
}
