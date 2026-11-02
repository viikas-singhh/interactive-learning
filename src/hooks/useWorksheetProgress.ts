import { useState, useEffect, useCallback } from 'react';
import { WORKSHEETS_LIST } from '../data/worksheetsData';
import confetti from 'canvas-confetti';

const STORAGE_KEY_RESPONSES = 'kidquest_worksheets_responses_v1';
const STORAGE_KEY_NAME = 'kidquest_student_name';

export interface WorksheetAnswerState {
  data: Record<string, any>;
  isCompleted: boolean;
  completedAt?: string;
  score?: {
    correct: number;
    total: number;
  };
}

export function useWorksheetProgress() {
  const [responses, setResponses] = useState<Record<string, WorksheetAnswerState>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_RESPONSES);
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.error('Failed to read from localStorage', e);
      return {};
    }
  });

  const [studentName, setStudentName] = useState<string>(() => {
    return localStorage.getItem(STORAGE_KEY_NAME) || 'Curious Explorer';
  });

  // Keep state synced to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_RESPONSES, JSON.stringify(responses));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }, [responses]);

  const updateStudentName = (name: string) => {
    setStudentName(name);
    localStorage.setItem(STORAGE_KEY_NAME, name);
  };

  const getWorksheetData = useCallback((worksheetId: string) => {
    return responses[worksheetId]?.data || {};
  }, [responses]);

  const isWorksheetCompleted = useCallback((worksheetId: string) => {
    return Boolean(responses[worksheetId]?.isCompleted);
  }, [responses]);

  const saveWorksheetField = useCallback((worksheetId: string, fieldName: string, value: any) => {
    setResponses(prev => {
      const currentSheet = prev[worksheetId] || { data: {}, isCompleted: false };
      return {
        ...prev,
        [worksheetId]: {
          ...currentSheet,
          data: {
            ...currentSheet.data,
            [fieldName]: value
          }
        }
      };
    });
  }, []);

  const saveEntireSheetData = useCallback((worksheetId: string, fullData: Record<string, any>) => {
    setResponses(prev => {
      const currentSheet = prev[worksheetId] || { data: {}, isCompleted: false };
      return {
        ...prev,
        [worksheetId]: {
          ...currentSheet,
          data: fullData
        }
      };
    });
  }, []);

  const completeWorksheet = useCallback((worksheetId: string, score?: { correct: number; total: number }) => {
    setResponses(prev => {
      const currentSheet = prev[worksheetId] || { data: {}, isCompleted: false };
      return {
        ...prev,
        [worksheetId]: {
          ...currentSheet,
          isCompleted: true,
          completedAt: new Date().toISOString(),
          score: score || currentSheet.score
        }
      };
    });

    // Fire celebration confetti!
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }
  }, []);

  const resetWorksheet = useCallback((worksheetId: string) => {
    setResponses(prev => {
      const next = { ...prev };
      delete next[worksheetId];
      return next;
    });
  }, []);

  // Summary statistics
  const totalWorksheets = WORKSHEETS_LIST.length;
  const completedCount = WORKSHEETS_LIST.filter(w => responses[w.id]?.isCompleted).length;
  const progressPercentage = Math.round((completedCount / totalWorksheets) * 100);
  const earnedBadges = WORKSHEETS_LIST
    .filter(w => responses[w.id]?.isCompleted)
    .map(w => ({
      ...w.badge,
      worksheetTitle: w.title,
      worksheetId: w.id,
      pageNumber: w.pageNumber
    }));

  return {
    responses,
    studentName,
    updateStudentName,
    getWorksheetData,
    isWorksheetCompleted,
    saveWorksheetField,
    saveEntireSheetData,
    completeWorksheet,
    resetWorksheet,
    totalWorksheets,
    completedCount,
    progressPercentage,
    earnedBadges
  };
}
