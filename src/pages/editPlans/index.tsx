import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { H1 } from "../newSpecialty/styled";
import { updatePlans, getPlansById } from "../../config/service/plans";
import "react-toastify/dist/ReactToastify.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { toast } from "react-toastify";
import ReturnButton from "../../componets/return";
import { ContainerTble } from "../dashBord/style";
import { Input } from "../../componets/ui/input/styled";
import { IOSSwitch } from "../../componets/switch";
import { ButtonSave } from "../../componets/Buttons/saveButton/styled";
import Modal from "../../componets/modalSave";
import { Box } from "@mui/material";
import { BoxNewPlans } from "../newPlans/styled";

interface Option {
  label: string;
  value: string
}

const StyledSelect: React.FC<{
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  options: Option[];
}> = ({ label, value, onChange, options }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={value}
        label={label}
        onChange={(e) => onChange(e as React.ChangeEvent<{ value: unknown }>)}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const EditPlan = () => {
  const location = useLocation();
  const type = new URLSearchParams(location.search).get("type");
  const planId = new URLSearchParams(location.search).get("id");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [period, setPeriod] = useState("mensal");
  const [values, setValues] = useState("");
  const [planTitle, setPlanTitle] = useState("");
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the existing plan data
    if (planId) {
      getPlansById(planId).then((planData) => {
        if (planData) {
          setPlanTitle(planData.period);
          setPeriod(planData.period);
          setValues(planData.values);
          setChecked(planData.enabled);
        } else {
          // Handle error when fetching data
          console.error("Error fetching plan data.");
        }
      });
    }
  }, [planId]);

  const handleSaveClick = async () => {
    if (!values) {
      toast.error("O campo 'Valor' é obrigatório.");
      return;
    }

    try {
      // Construct an object with the updated plan data
      const updatedPlanData: ProcessPlans = {
        planTitle: planTitle,
        period: period,
        values: values,
        enabled: checked,
        type: type,
      };

      if (planId) {
        const response = await updatePlans(planId, updatedPlanData);
        if (response) {
          toast.success("Plano atualizado com sucesso!");
          setIsModalOpen(true);
          setTimeout(() => {
            setIsModalOpen(false);
            navigate("/home/plans");
          }, 1500);
        } else {
          toast.error("Erro ao atualizar o plano. Tente novamente.");
        }
      } else {
        toast.error("ID do plano não encontrado.");
      }
    } catch (error) {
      console.error("Erro ao atualizar plano:", error);
      toast.error("Ocorreu um erro ao atualizar o plano. Tente novamente.");
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSwitchChange = () => {
    setChecked(!checked);
  };

  return (
    <>
      <ReturnButton link="/home/plans">Editar Plano - {type}</ReturnButton>
      <ContainerTble>
        <H1>Dados do plano</H1>

        <BoxNewPlans>
          <Input
            type="text"
            value={planTitle}
            onChange={(e) => setPlanTitle(e.target.value)}
            label="Título do plano"
          />
          <>
            <div>
              <p>Situação</p>
              <IOSSwitch
                sx={{ m: 1 }}
                checked={checked}
                onChange={handleSwitchChange}
              />
              <span>{checked ? "Ativo" : "Inativo"}</span>
            </div>
          </>
          <div>
            <Box sx={{ minWidth: 300 }}>
              <StyledSelect
                label="Período"
                value={period}
                onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
                  setPeriod(e.target.value as string)
                }
                options={[
                  { label: "Mensal", value: "mensal" },
                  { label: "Trimestral", value: "trimestral" },
                  { label: "Semestral", value: "semestral" },
                ]}
              />
            </Box>
          </div>
        </BoxNewPlans>

        <div>
          <Input
            style={{ width: 200 }}
            label="Valor"
            type="text"
            value={values}
            onChange={(e) => setValues(e.target.value)}
          />
        </div>

        <ButtonSave onClick={handleSaveClick}>Salvar</ButtonSave>
      </ContainerTble>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Plano atualizado com sucesso!</h2>
      </Modal>
    </>
  );
};

export default EditPlan;
