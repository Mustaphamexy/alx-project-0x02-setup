export interface CardProps {
  title: string;
  content: string;
}

export interface PostModalProps {
  
  onClose: () => void;
  onSubmit: (post: CardProps) => void;
}

export interface ButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}

export interface PostProps {
  title: string;
  id: number;
  body: string;
  userId: number;
}

export interface UserProps {
  name: string;
  email: string;
  address: string;
}