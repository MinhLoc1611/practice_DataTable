import {
  Grid,
  Table,
  TableHeaderRow,
  VirtualTable,
  PagingPanel,
} from "@devexpress/dx-react-grid-material-ui";
import {
  SortingState,
  PagingState,
  IntegratedSorting,
  CustomPaging
} from "@devexpress/dx-react-grid";
import { AdsClick, RemoveRedEyeOutlined } from "@mui/icons-material";
import { Box, Switch, SwitchProps, styled } from "@mui/material";
import {
  columnsWidth,
  columns,
  pageSize,
} from "../../../settings/GridSettings";
import DataPopover from "../../../component/ClickPopover";
import EstimatedRow from "../../../component/EstimatedRow";
import { UserType } from "../../../types/users.type";
import { useGetUsersQuery } from "../../../api/apiSlice";
import SpendFilter from "../../../component/SpendFilter";
import { useState } from "react";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

interface HeaderSwitchProps {
  value: boolean;
}

interface NameRowsProps {
  value: string;
}

interface RowsUSDProps {
  value: number;
}

export default function ReactGrid() {

    const [sorting, setSorting] = useState([]);

    const [search, setSearch] = useState({
        name: 'get',
        value: null
    })

    
    const [currentPage, setCurrentPage] = useState(0);
    const {data, isFetching} = useGetUsersQuery({name: search.name, value: search.value, skip: (pageSize * currentPage)}, {refetchOnMountOrArgChange:true})
    const rows: UserType[] | undefined = data?.content.data
    const total: number | undefined = data?.content.total

  const getRowId = (rows: { id: number }) => rows.id;

  const HeaderSwitch = ({ value, ...restProps }: HeaderSwitchProps) => (
    <Table.Cell {...restProps}>
      <IOSSwitch checked={value} />
    </Table.Cell>
  );

  const NameRows = ({ value, ...restProps }: NameRowsProps) => (
    <Table.Cell {...restProps}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <AdsClick sx={{ mr: 1 }} />
        {value}
      </Box>
    </Table.Cell>
  );

  const EyeRows = ({ ...restProps }) => (
    <Table.Cell {...restProps}>
      <DataPopover />
    </Table.Cell>
  );

  const RowsUSD = ({ value, ...restProps }: RowsUSDProps) => (
    <Table.Cell {...restProps}>${value.toLocaleString()}</Table.Cell>
  );

  interface EsConversionRowsProps {
    value: {
      low: number;
      medium: number;
      high: number;
    };
  }

  const EsConversionRows = ({ value, ...restProps }: EsConversionRowsProps) => (
    <Table.Cell {...restProps}>
      <EstimatedRow low={value.low} medium={value.medium} high={value.high} />
    </Table.Cell>
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Cell = (props: any) => {
    const { column } = props;
    if (column.name === "header") {
      return <HeaderSwitch {...props} />;
    }
    if (column.name === "name") {
      return <NameRows {...props} />;
    }
    if (
      column.name === "spend" ||
      column.name === "metric2" ||
      column.name === "metric3" ||
      column.name === "metric6" ||
      column.name === "metric7"
    ) {
      return <RowsUSD {...props} />;
    }
    if (column.name === "eyeMetric" || column.name === "eyeMetric2") {
      return <EyeRows {...props} />;
    }
    if (column.name === "estimatedConversion") {
      return <EsConversionRows {...props} />;
    }
    return <Table.Cell {...props} />;
  };

  const TableHeaderContent = ({
    column,
    children,
    ...restProps
  }: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  any) => (
    <TableHeaderRow.Content
      column={column}
      styled={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      {...restProps}
    >
      {column.name === "eyeMetric" || column.name === "eyeMetric2" ? (
        <RemoveRedEyeOutlined />
      ) : 
      column.name === 'spend' ? (
        <SpendFilter name={children} setSearch={setSearch} setSorting={setSorting}/>
    ) :
      (
        children
      )}
    </TableHeaderRow.Content>
  );
  return (
    <Box>
      {!isFetching && (
        <Grid rows={rows} columns={columns} getRowId={getRowId}>
          <PagingState currentPage={currentPage} onCurrentPageChange={setCurrentPage} pageSize={pageSize} />
          <CustomPaging
          totalCount={total}
        />
          <SortingState sorting={sorting}/>
          <IntegratedSorting />
          <VirtualTable
            height={500}
            columnExtensions={columnsWidth}
            cellComponent={Cell}
          />
          <TableHeaderRow
            contentComponent={TableHeaderContent}
          />
          <PagingPanel />
        </Grid>
      )}
    </Box>
  );
}
