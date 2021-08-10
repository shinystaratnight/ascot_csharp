import AddIcon from '@material-ui/icons/Add';
import CustomPopper from "components/CustomPopper/CustomPopper"
import CustomerLink from "views/Search/CustomerLink"

export const LEFT_TABLE_COLUMNS = [
    {
        Header: "Customer Name",
        accessor: "customer_name"
    },
    {
        Header: "Last Job",
        accessor: "last_job"
    }
]

export const RIGHT_TABLE_COLUMNS = [
    {
        Header: "Job Id",
        accessor: "job_id"
    },
    {
        Header: "Customer Name",
        accessor: "customer_name"
    },
    {
        Header: "Site",
        accessor: "site"
    },
    {
        Header: "Stage",
        accessor: "stage"
    },
    {
        Header: "Description",
        accessor: "description"
    }
]

export const LEFT_TABLE_MOCK_DATA = [
    {
        "name": "Toya P. Coady",
        "customer_name": <CustomerLink name="Toya P. Coady" id="1" />,
        "last_job": "Liverpool. Feb 2021"
    },
    {
        "name": "Rhonda D. Moore",
        "customer_name": <CustomerLink name="Rhonda D. Moore" id="2" />,
        "last_job": "Liverpool. Nov 2020"
    },
    {
        "name": "Gayle J. Katz",
        "customer_name": <CustomerLink name="Gayle J. Katz" id="3" />,
        "last_job": "Formby, Nov 2020"
    },
    {
        "name": "Kenny R. Casillas",
        "customer_name": <CustomerLink name="Kenny R. Casillas" id="4" />,
        "last_job": "Belgium, Oct 2020"
    },
    {
        "name": "Gayle J. Katz",
        "customer_name": <CustomerLink name="Gayle J. Katz" id="5" />,
        "last_job": "Leeds, Oct 2020"
    },
    {
        "name": "Toya P. Coady",
        "customer_name": <CustomerLink name="Toya P. Coady" id="6" />,
        "last_job": "Leeds, Oct 2020"
    },
    {
        "name": "Gayle J. Katz",
        "customer_name": <CustomerLink name="Gayle J. Katz" id="7" />,
        "last_job": "Leeds, Oct 2020"
    },
    {
        "name": "Toya P. Coady",
        "customer_name": <CustomerLink name="Toya P. Coady" id="8" />,
        "last_job": "Leeds, Oct 2020"
    }
]


const description = [
    {
        key: "Door Type",
        value: "x 20"
    },
    {
        key: "Number of Doors",
        value: "SR1 x 10"
    },
    {
        key: "Total",
        value: "52"
    },
    {
        key: "Deliver",
        value: "B11AA"
    },
]

export const actionButtons = [
    { color: "", icon: AddIcon },
  ].map((prop, key) => {
    return (
        <CustomPopper key={ key } description={ description } />
    );
});
