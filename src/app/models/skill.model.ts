export interface SkillBadge {
  title: string;
  icon: string;
  level: string;
  use: string;
  evidence: string;
}

export interface SkillGroup {
  id: string;
  titleKey: string;
  badges: SkillBadge[];
}
