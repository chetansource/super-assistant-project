
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

const SelectQuestionType = () => {
  return (
      <Dropdown >
          <DropdownTrigger>
              <Button
                  variant="bordered"
              >
                  <NoteAddIcon fontSize="large"/>
              </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions" className="flex flex-col text-black bg-gray-400 ">
              <DropdownItem key="new">Categorize</DropdownItem>
              <DropdownItem key="copy">Cloze</DropdownItem>
              <DropdownItem key="edit">Comprehension</DropdownItem>
          </DropdownMenu>
      </Dropdown>
  );
};

export default SelectQuestionType;
