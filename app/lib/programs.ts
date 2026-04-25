import type { ProgramIconType } from '@/app/components/ProgramIcon'

type ProgramDefinition = {
  id: string
  icon: ProgramIconType
  badgeAr: string
  badgeEn: string
  titleAr: string
  titleEn: string
  summaryAr: string
  summaryEn: string
  descAr: string
  descEn: string
  highlightsAr: string[]
  highlightsEn: string[]
  featuresAr: string[]
  featuresEn: string[]
  durationAr: string
  durationEn: string
}

export type LocalizedProgram = {
  id: string
  icon: ProgramIconType
  badge: string
  title: string
  summary: string
  desc: string
  highlights: string[]
  features: string[]
  duration: string
}

const programDefinitions: ProgramDefinition[] = [
  {
    id: 'weight',
    icon: 'layers',
    badgeAr: 'الأكثر طلباً',
    badgeEn: 'Most Popular',
    titleAr: 'برنامج إدارة الوزن',
    titleEn: 'Weight Management Program',
    summaryAr: 'خطة متوازنة لخسارة أو زيادة الوزن بدون حرمان.',
    summaryEn: 'A balanced plan for healthy weight loss or gain without extremes.',
    descAr: 'برامج إنقاص الوزن المستدامة مع خطط غذائية مخصصة تناسب نمط حياتك المصري.',
    descEn: 'Sustainable weight loss programs with personalized meal plans tailored to your Egyptian lifestyle.',
    highlightsAr: ['وجبات يومية واضحة', 'متابعة أسبوعية', 'وصفات مصرية'],
    highlightsEn: ['Clear daily meals', 'Weekly follow-ups', 'Egyptian recipes'],
    featuresAr: ['تحليل شامل للجسم', 'خطط غذائية مخصصة', 'متابعة أسبوعية', 'وصفات مصرية', 'تقرير شهري مفصل'],
    featuresEn: ['Comprehensive body analysis', 'Personalized meal plans', 'Weekly follow-ups', 'Egyptian recipes', 'Detailed monthly report'],
    durationAr: '3-6 أشهر',
    durationEn: '3-6 months',
  },
  {
    id: 'diabetes',
    icon: 'activity',
    badgeAr: 'رعاية علاجية',
    badgeEn: 'Clinical Care',
    titleAr: 'برنامج إدارة السكري',
    titleEn: 'Diabetes Management Program',
    summaryAr: 'مراقبة غذائية تساعدك على استقرار سكر الدم بثقة.',
    summaryEn: 'Nutrition monitoring built to support steadier blood sugar with confidence.',
    descAr: 'خطط غذائية متخصصة للتحكم في سكر الدم مع متابعة طبية مستمرة.',
    descEn: 'Specialized nutrition plans for blood sugar control with ongoing medical monitoring.',
    highlightsAr: ['تتبع سكر الدم', 'تنسيق مع الطبيب', 'وجبات متوازنة'],
    highlightsEn: ['Blood sugar tracking', 'Doctor coordination', 'Balanced meals'],
    featuresAr: ['تتبع سكر الدم', 'خطط وجبات مخصصة', 'إرشاد غذائي مستمر', 'تنسيق مع طبيبك', 'متابعة شهرية'],
    featuresEn: ['Blood sugar tracking', 'Custom meal plans', 'Ongoing nutrition guidance', 'Coordination with your doctor', 'Monthly follow-up'],
    durationAr: '6+ أشهر',
    durationEn: '6+ months',
  },
  {
    id: 'pregnancy',
    icon: 'heart',
    badgeAr: 'رعاية الحمل',
    badgeEn: 'Prenatal Care',
    titleAr: 'برنامج تغذية الحوامل',
    titleEn: 'Prenatal Nutrition Program',
    summaryAr: 'دعم غذائي آمن ومريح للأم والطفل في كل مرحلة.',
    summaryEn: 'Safe, reassuring nutrition support for both mother and baby through every stage.',
    descAr: 'رعاية تغذية شاملة للأمهات المنتظرات لضمان صحة مثالية للأم والطفل.',
    descEn: 'Comprehensive nutrition care for expecting mothers to ensure optimal health for both mother and baby.',
    highlightsAr: ['خطط آمنة للحمل', 'متابعة شهرية', 'إرشاد للمكملات'],
    highlightsEn: ['Pregnancy-safe plans', 'Monthly check-ins', 'Supplement guidance'],
    featuresAr: ['خطط غذائية آمنة للحمل', 'متابعة شهرية', 'مكملات غذائية', 'إرشاد غذائي', 'تحليل تغذية'],
    featuresEn: ['Pregnancy-safe meal plans', 'Monthly follow-up', 'Supplement guidance', 'Nutrition counseling', 'Body composition analysis'],
    durationAr: '9+ أشهر',
    durationEn: '9+ months',
  },
  {
    id: 'family',
    icon: 'users',
    badgeAr: 'دعم الأسرة',
    badgeEn: 'Family Support',
    titleAr: 'برنامج تغذية الأسرة',
    titleEn: 'Family Nutrition Program',
    summaryAr: 'نظام عملي يسهّل تنظيم وجبات الأسرة كلها.',
    summaryEn: 'A practical system that makes family meal planning much easier.',
    descAr: 'إرشادات تغذية كاملة للعائلة بأكملها من الأطفال إلى كبار السن.',
    descEn: 'Complete nutrition guidance for the entire family from children to seniors.',
    highlightsAr: ['وجبات للعائلة', 'تغذية الأطفال', 'تثقيف غذائي'],
    highlightsEn: ['Family meal plans', 'Children nutrition', 'Nutrition education'],
    featuresAr: ['خطط وجبات للعائلة', 'تغذية الأطفال', 'احتياجات كبار السن', 'تثقيف غذائي', 'متابعة ربع سنوية'],
    featuresEn: ['Family meal plans', 'Children nutrition', 'Senior dietary needs', 'Nutrition education', 'Quarterly follow-up'],
    durationAr: 'سنوي',
    durationEn: 'Annual',
  },
  {
    id: 'sports',
    icon: 'clock',
    badgeAr: 'أداء نشط',
    badgeEn: 'Performance',
    titleAr: 'برنامج التغذية الرياضية',
    titleEn: 'Sports Nutrition Program',
    summaryAr: 'وقود غذائي محسوب لتحسين الأداء والتعافي.',
    summaryEn: 'Calculated nutrition fuel to improve performance and recovery.',
    descAr: 'خطط غذائية محسنة للأداء الرياضي والتعافي العضلي.',
    descEn: 'Optimized nutrition plans for athletic performance and muscle recovery.',
    highlightsAr: ['أداء أفضل', 'تعافٍ أسرع', 'مكملات آمنة'],
    highlightsEn: ['Better performance', 'Faster recovery', 'Safe supplements'],
    featuresAr: ['خطط غذائية رياضية', 'جداول تدريب', 'إدارة التعافي', 'مكملات آمنة', 'تحليل الأداء'],
    featuresEn: ['Sports nutrition plans', 'Training schedules', 'Recovery management', 'Safe supplements', 'Performance analysis'],
    durationAr: '3-12 أشهر',
    durationEn: '3-12 months',
  },
  {
    id: 'detox',
    icon: 'shield',
    badgeAr: 'إعادة توازن',
    badgeEn: 'Reset Plan',
    titleAr: 'برنامج Detox & Cleanse',
    titleEn: 'Detox & Cleanse Program',
    summaryAr: 'خطة قصيرة لإعادة التنظيم الغذائي بطريقة آمنة.',
    summaryEn: 'A short reset plan to reorganize eating habits in a safe way.',
    descAr: 'برنامج قصير المدى يساعدك على إعادة التوازن الغذائي بعادات أوضح ودعم منتظم.',
    descEn: 'A short-term reset designed to help you rebuild food balance with clearer habits and regular support.',
    highlightsAr: ['مدة قصيرة', 'دعم أسبوعي', 'وصفات سهلة'],
    highlightsEn: ['Short duration', 'Weekly support', 'Simple recipes'],
    featuresAr: ['خطة قصيرة وواضحة', 'وصفات سهلة التطبيق', 'دعم أسبوعي', 'تنظيم العادات اليومية', 'متابعة مستمرة'],
    featuresEn: ['Short, clear plan', 'Easy recipes', 'Weekly support', 'Daily habit reset', 'Ongoing follow-up'],
    durationAr: '2-4 أسابيع',
    durationEn: '2-4 weeks',
  },
]

export function getPrograms(locale: string): LocalizedProgram[] {
  const isArabic = locale === 'ar'

  return programDefinitions.map((program) => ({
    id: program.id,
    icon: program.icon,
    badge: isArabic ? program.badgeAr : program.badgeEn,
    title: isArabic ? program.titleAr : program.titleEn,
    summary: isArabic ? program.summaryAr : program.summaryEn,
    desc: isArabic ? program.descAr : program.descEn,
    highlights: isArabic ? program.highlightsAr : program.highlightsEn,
    features: isArabic ? program.featuresAr : program.featuresEn,
    duration: isArabic ? program.durationAr : program.durationEn,
  }))
}
