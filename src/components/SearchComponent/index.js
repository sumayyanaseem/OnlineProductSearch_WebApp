import { Box, TextField } from '@mui/material';
import { useState } from 'react';
import { SearchOutlined } from '@material-ui/icons';

import './index.css';

const SearchComponent = (props) => {

    const [filter, setFilter] = useState('');
    const onSearchInputChange = (event) => {
        const input = event.target.value;
        setFilter(input);
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <TextField
                onChange={onSearchInputChange}
                value={filter}
                id="standard-bare"
                variant="outlined"
                placeholder="Search Products"
                InputProps={{
                    endAdornment: (
                        <SearchOutlined color="primary" />
                    ),
                }}
            />
        </Box>
    );
}

export default SearchComponent;