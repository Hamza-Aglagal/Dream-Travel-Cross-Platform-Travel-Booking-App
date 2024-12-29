/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Argon Dashboard 2 MUI examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import { Autocomplete, Button, Chip, Input, Stack, TextField } from "@mui/material";

function Transport() {
    const { columns, rows } = authorsTableData;
    const { columns: prCols, rows: prRows } = projectsTableData;





    return (
        <DashboardLayout>


            <DashboardNavbar />


            <ArgonBox py={3}>


                <ArgonBox mb={3}>
                    <Card>


                        <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                            <ArgonTypography variant="h6">Authors table</ArgonTypography>
                        </ArgonBox>

                        <ArgonBox
                            sx={{
                                "& .MuiTableRow-root:not(:last-child)": {
                                    "& td": {
                                        borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                                            `${borderWidth[1]} solid ${borderColor}`,
                                    },
                                },
                            }}
                        >
                            {/* <Table columns={columns} rows={rows} /> */}


                            <Stack spacing={3} sx={{ width: 500, margin: '3rem' }}>

                                <Input placeholder="email" />
                                <Input placeholder="password" />

                            </Stack>
                            
                            <Stack spacing={3} sx={{ width: 100, margin: '3rem' }}>
                                <Button variant="contained">Contained</Button>
                            </Stack>

                        </ArgonBox>


                    </Card>
                </ArgonBox>


                <Card>
                    <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                        <ArgonTypography variant="h6">Projects table</ArgonTypography>
                    </ArgonBox>
                    <ArgonBox
                        sx={{
                            "& .MuiTableRow-root:not(:last-child)": {
                                "& td": {
                                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                                        `${borderWidth[1]} solid ${borderColor}`,
                                },
                            },
                        }}
                    >
                        <Table columns={prCols} rows={prRows} />
                    </ArgonBox>
                </Card>

            </ArgonBox>



            <Footer />


        </DashboardLayout>
    );
}

export default Transport;
