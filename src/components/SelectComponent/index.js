import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import React from "react"
import Box from '@mui/material/Box';

const SelectComponent = ({ selectedValue, handleSelection, values, label }) => {
    const handleChange = (event) => {
        const input = event.target.value;
        handleSelection(input)
    }
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="select-label">{label}</InputLabel>

                <Select
                    labelId="select-label"
                    id="simple-select"
                    value={selectedValue}
                    label={label}
                    onChange={handleChange}
                >
                    {
                        values.map((value) =>
                            <MenuItem value={value}>{value}</MenuItem>
                        )
                    }
                </Select>

            </FormControl>
        </Box>
    )
}

export default SelectComponent;