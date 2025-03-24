import moment from "moment";
import { Toolbar } from "@mui/material";
import { useEffect, useState } from "react";

//styles
import { UseAppContext } from "../../context/AppContext";
import { get_transactions_list } from "../../DAL/transaction";
import TopbarWithWhiteBackground from "../../components/TopbarWithWhiteBackground";
import "./history.css";

function HistoryPage() {
  const { fetchUserDetails, userData } = UseAppContext();

  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTransactions = async () => {
    setIsLoading(true);
    try {
      const response = await get_transactions_list(userData?._id);
      if (response?.data?.length > 0) {
        setTransactions(response?.data || []);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (userData?._id) {
      fetchTransactions();
    } else {
      fetchUserDetails();
    }
  }, [userData]);

  return (
    <>
      <div id="app" style={{ backgroundColor: "#ffffff" }}>
        <TopbarWithWhiteBackground
          title="Consumption list"
          backgroundColor="#ffffff"
        />
        <Toolbar
          sx={{
            minHeight: { xs: "48px", sm: "48px" }, // Override the min-height set by MUI
          }}
        />
        <div id="nava" style={{ paddingTop: 50 }} />
        <div data-v-d0c1a326="" className="rulepage">
          <section data-v-d0c1a326="" className="section-box">
            <div data-v-d0c1a326="" role="feed" className="van-list">
              {transactions?.length > 0 ? (
                transactions.reverse().map((transaction, index) => (
                  <div key={index} data-v-d0c1a326="" className="listbox">
                    <div data-v-d0c1a326="" className="right">
                      <div data-v-d0c1a326="" className="typeti d-flex">
                        <p data-v-d0c1a326="" className="text-capitalize">
                          {transaction.type} :{" "}
                        </p>
                        <span data-v-d0c1a326="" className="px-2">
                          ${transaction.amount}
                        </span>
                      </div>
                      <div data-v-d0c1a326="" className="timetype flex">
                        <p data-v-d0c1a326="">
                          <strong style={{ textTransform: "capitalize" }}>
                            Date :
                          </strong>
                        </p>
                        <p data-v-d0c1a326="" className="px-2">
                          {moment(transaction.createdAt).format(
                            "YYYY MM DD hh:mm a"
                          )}
                        </p>
                      </div>
                      <div data-v-d0c1a326="" className="timetype flex">
                        <p data-v-d0c1a326="">
                          <strong style={{ textTransform: "capitalize" }}>
                            Status :
                          </strong>
                        </p>
                        <p data-v-d0c1a326="" className="px-2">
                          Success
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  <p>
                    {isLoading
                      ? "Loading..."
                      : "No Transaction History Available"}
                  </p>
                </>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default HistoryPage;
