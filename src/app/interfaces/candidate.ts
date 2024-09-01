export interface Candidate {
  firstName: string;
  lastName: string;
  file: File | null;
}

export interface LocalCandidate {
  firstName: string;
  lastName: string;
  seniority: 'junior' | 'senior';
  years: number;
  availability: boolean;
}
