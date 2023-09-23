interface UserCardProps {
    icon: React.ReactNode;
    title: string;
    content: string;
    variant?: "green" | "blue" | "red" | "yellow";
  }

  type UserMenuProps = {
    isOpen: boolean;
    onClose: () => void;
  };
  