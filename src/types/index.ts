export type WorksheetCategory = 
  | 'Art & Creativity'
  | 'Values & Ethics'
  | 'Science & Nature'
  | 'Financial Literacy'
  | 'Observation & Logic'
  | 'Language & Stories';

export interface WorksheetMetadata {
  id: string;
  pageNumber: number;
  title: string;
  marathiTitle?: string;
  category: WorksheetCategory;
  gradeLevel: string;
  description: string;
  estimatedTime: string;
  icon: string;
  hasAutoGrading: boolean;
  activityTypes: string[];
  originalPageImage?: string;
  badge: {
    title: string;
    icon: string;
    description: string;
  };
}

export interface UserResponses {
  [worksheetId: string]: {
    data: Record<string, any>;
    isCompleted: boolean;
    completedAt?: string;
    score?: {
      correct: number;
      total: number;
    };
  };
}
