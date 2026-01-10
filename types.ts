import React from 'react';

export type ViewState = 'home' | 'services' | 'about' | 'contact';

export interface NavItem {
  id: ViewState;
  label: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  delay?: number;
}