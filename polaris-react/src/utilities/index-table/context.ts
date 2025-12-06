import {createContext} from 'react';

interface RowContextType {
  itemId?: string;
  selected?: boolean | 'indeterminate';
  disabled?: boolean;
  position?: number;
  onInteraction?: (event: React.MouseEvent | React.KeyboardEvent) => void;
}

export const RowContext = createContext<RowContextType>({});

export const RowHoveredContext = createContext<boolean | undefined>(undefined);

export interface ScrollContextType {
  scrollableContainer: HTMLDivElement | null;
  canScrollLeft: boolean;
  canScrollRight: boolean;
}

export const scrollDefaultContext = {
  scrollableContainer: null,
  canScrollLeft: false,
  canScrollRight: false,
};

export const ScrollContext =
  createContext<ScrollContextType>(scrollDefaultContext);

export interface IndexTableCustomizationContextType {
  rowClassName?: string;
  rowStyle?: React.CSSProperties;
  cellClassName?: string;
  cellStyle?: React.CSSProperties;
  checkboxClassName?: string;
  checkboxStyle?: React.CSSProperties;
  checkboxWrapperClassName?: string;
  checkboxWrapperStyle?: React.CSSProperties;
  expandable?: boolean;
  expandedRowIds?: Set<string>;
  toggleRowExpansion?: (rowId: string) => void;
  isRowExpandable?: (rowId: string) => boolean;
  getRowChildren?: (rowElement: React.ReactElement) => React.ReactNode[];
  expandIcon?: React.ReactNode;
  expandIconCollapsed?: React.ReactNode;
  expandIconExpanded?: React.ReactNode;
  expandButtonClassName?: string;
  expandButtonStyle?: React.CSSProperties;
}

export const IndexTableCustomizationContext =
  createContext<IndexTableCustomizationContextType>({});
