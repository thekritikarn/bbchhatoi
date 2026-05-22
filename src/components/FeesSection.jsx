"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function FeesSection() {
  const [activeTab, setActiveTab] = useState("science"); // "science" or "arts"
  const [scienceSubTab, setScienceSubTab] = useState("science-hostel"); // "science-hostel" or "science-day"
  const [artsSubTab, setArtsSubTab] = useState("arts-hostel"); // "arts-hostel" or "arts-day"

  return (
    <section className="section section-alt" id="fees">
      <div className="container">
        <ScrollReveal className="text-center reveal" style={{ marginBottom: "var(--space-3xl)" }}>
          <span className="section-label">Fee Structure</span>
          <h2 className="section-title">Transparent & Affordable Fees</h2>
          <p className="section-subtitle">
            We believe education should not be restricted by money. Our fee structure is designed to be transparent
            and affordable.
          </p>
        </ScrollReveal>

        {/* Course Tabs */}
        <ScrollReveal className="fee-tabs reveal">
          <button
            className={`fee-tab ${activeTab === "science" ? "active" : ""}`}
            onClick={() => setActiveTab("science")}
          >
            +2 Science
          </button>
          <button
            className={`fee-tab ${activeTab === "arts" ? "active" : ""}`}
            onClick={() => setActiveTab("arts")}
          >
            +2 Arts
          </button>
        </ScrollReveal>

        {/* +2 Science Fees */}
        {activeTab === "science" && (
          <ScrollReveal className="fee-content active reveal">
            <div className="fee-sub-tabs">
              <button
                className={`fee-sub-tab ${scienceSubTab === "science-hostel" ? "active" : ""}`}
                onClick={() => setScienceSubTab("science-hostel")}
              >
                With Hostel
              </button>
              <button
                className={`fee-sub-tab ${scienceSubTab === "science-day" ? "active" : ""}`}
                onClick={() => setScienceSubTab("science-day")}
              >
                Day Scholar
              </button>
            </div>

            {/* Science - With Hostel */}
            {scienceSubTab === "science-hostel" && (
              <div className="fee-sub-content active">
                <div className="fee-table-wrapper">
                  <table className="fee-table">
                    <thead>
                      <tr>
                        <th>Particular</th>
                        <th>Amount (Per Year)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Admission Fee</td>
                        <td className="fee-amount">₹10,000</td>
                      </tr>
                      <tr>
                        <td>Tuition & Lab Fee</td>
                        <td className="fee-amount">₹30,000</td>
                      </tr>
                      <tr>
                        <td>Campus Examination & Activity Fee</td>
                        <td className="fee-amount">₹2,500</td>
                      </tr>
                      <tr>
                        <td>Hostel Fee</td>
                        <td className="fee-amount">₹37,500</td>
                      </tr>
                      <tr className="fee-total">
                        <td>
                          <strong>Total Payable</strong>
                        </td>
                        <td className="fee-amount">
                          <strong>₹80,000</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Science - Day Scholar */}
            {scienceSubTab === "science-day" && (
              <div className="fee-sub-content active">
                <div className="fee-table-wrapper">
                  <table className="fee-table">
                    <thead>
                      <tr>
                        <th>Particular</th>
                        <th>Amount (Per Year)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Admission Fee</td>
                        <td className="fee-amount">₹10,000</td>
                      </tr>
                      <tr>
                        <td>Tuition & Lab Fee</td>
                        <td className="fee-amount">₹30,000</td>
                      </tr>
                      <tr>
                        <td>Campus Examination & Activity Fee</td>
                        <td className="fee-amount">₹5,000</td>
                      </tr>
                      <tr>
                        <td>Hostel Fee</td>
                        <td className="fee-amount" style={{ color: "var(--text-light)" }}>
                          Not Applicable
                        </td>
                      </tr>
                      <tr className="fee-total">
                        <td>
                          <strong>Total Payable</strong>
                        </td>
                        <td className="fee-amount">
                          <strong>₹45,000</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </ScrollReveal>
        )}

        {/* +2 Arts Fees */}
        {activeTab === "arts" && (
          <ScrollReveal className="fee-content active reveal">
            <div className="fee-sub-tabs">
              <button
                className={`fee-sub-tab ${artsSubTab === "arts-hostel" ? "active" : ""}`}
                onClick={() => setArtsSubTab("arts-hostel")}
              >
                With Hostel
              </button>
              <button
                className={`fee-sub-tab ${artsSubTab === "arts-day" ? "active" : ""}`}
                onClick={() => setArtsSubTab("arts-day")}
              >
                Day Scholar
              </button>
            </div>

            {/* Arts - With Hostel */}
            {artsSubTab === "arts-hostel" && (
              <div className="fee-sub-content active">
                <div className="fee-table-wrapper">
                  <table className="fee-table">
                    <thead>
                      <tr>
                        <th>Particular</th>
                        <th>Amount (Per Year)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Admission Fee</td>
                        <td className="fee-amount">₹5,000</td>
                      </tr>
                      <tr>
                        <td>Tuition & Lab Fee</td>
                        <td className="fee-amount">₹5,000</td>
                      </tr>
                      <tr>
                        <td>Campus Examination & Activity Fee</td>
                        <td className="fee-amount">₹2,500</td>
                      </tr>
                      <tr>
                        <td>Hostel Fee</td>
                        <td className="fee-amount">₹37,500</td>
                      </tr>
                      <tr className="fee-total">
                        <td>
                          <strong>Total Payable</strong>
                        </td>
                        <td className="fee-amount">
                          <strong>₹50,000</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Arts - Day Scholar */}
            {artsSubTab === "arts-day" && (
              <div className="fee-sub-content active">
                <div className="fee-table-wrapper">
                  <table className="fee-table">
                    <thead>
                      <tr>
                        <th>Particular</th>
                        <th>Amount (Per Year)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Admission Fee</td>
                        <td className="fee-amount">₹5,000</td>
                      </tr>
                      <tr>
                        <td>Tuition & Lab Fee</td>
                        <td className="fee-amount">₹5,000</td>
                      </tr>
                      <tr>
                        <td>Campus Examination & Activity Fee</td>
                        <td className="fee-amount">₹2,500</td>
                      </tr>
                      <tr>
                        <td>Hostel Fee</td>
                        <td className="fee-amount" style={{ color: "var(--text-light)" }}>
                          Not Applicable
                        </td>
                      </tr>
                      <tr className="fee-total">
                        <td>
                          <strong>Total Payable</strong>
                        </td>
                        <td className="fee-amount">
                          <strong>₹12,500</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </ScrollReveal>
        )}

        <ScrollReveal className="text-center reveal" style={{ marginTop: "var(--space-xl)", color: "var(--text-light)", fontSize: "0.875rem" }}>
          * Fees are applicable per academic year. Fees once paid are non-refundable. Fee concessions available for
          eligible students — contact the office for details.
        </ScrollReveal>
      </div>
    </section>
  );
}
