interface UserCardProps {
  icon: React.ReactNode;
  title: string;
  content: number;
  variant?: "green" | "blue" | "red" | "yellow";
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete?: () => void;
  children?: React.ReactNode;
}

interface UserData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone:string
  profiles:string[]
}

interface usersDashBoard {
  doctor: {
    total: number;
    available: number;
    unavailable: number;
  };
  contractor: {
    total: number;
    available: number;
    unavailable: number;
  };
}
interface Specialty {
  name: string;
  enabled: boolean;
}
// Define the types for your data
type UserType = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  specialties: string;
  city: string;
  state: string;
  profiles: { name: string; authority: string }[];
  name: string;
  enabled: boolean;
  title: string;
  period: string;
  values: number;
};
type ProcessPlans = {
  id: number;
  planTitle: string;
  enabled: boolean;
  period: string;
  type: string ;
  values: number;
};

type ProcessedUserType = {
  user: string;
  email: string;
  whatsapp: string;
  specialties: string;
  city: string;
  state: string;
  userType: string;
  name: string;
};

type ProcessedNotification = {
  id: number;
  title: string;
  sendingDate: string;
  message: string;
  type:string
};

type ProcessedSpecialties = {
  name: string;
  active: boolean;
};

type TablePaginationProps = {
  data: UserData[];
  itemsPerPage: number;
  renderTable: (data: UserData[]) => React.ReactNode;
};
