import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import React from "react"
import Box from '@mui/material/Box';

const SelectComponent = ({ selectedValue, handleSelection, values, label, name,multiple=false }) => {
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="select-label">{label}</InputLabel>

                <Select
                    name={name}
                    labelId="select-label"
                    id="simple-select"
                    value={selectedValue}
                    label={label}
                    onChange={handleSelection}
                    multiple={multiple}
                    
                >
                    {
                        values.map((value) =>
                            <MenuItem value={value} key={value}>{value}</MenuItem>
                        )
                    }
                </Select>

            </FormControl>
        </Box>
    )
}

export default SelectComponent;