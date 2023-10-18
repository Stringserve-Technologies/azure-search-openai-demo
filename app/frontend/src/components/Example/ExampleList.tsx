import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What is the UNAIDS RFP reference number?",

        value: "What is the UNAIDS RFP reference number?"
    },

    {
        text: "What is the specification number for REQUEST FOR PROPOSAL (“RFP”) FOR PHOTOGRAPHY SERVICES?",
        value: "What is the specification number for REQUEST FOR PROPOSAL (“RFP”) FOR PHOTOGRAPHY SERVICES?"
    },

    {
        text: "When is the RFP for PHOTOGRAPHY SERVICES due?",

        value: "When is the RFP for PHOTOGRAPHY SERVICES due?"
    },

    {
        text: "Who should we email for Submission of Questions or Requests for Clarifications for the PHOTOGRAPHY SERVICES RFP?",

        value: "Who should we email for Submission of Questions or Requests for Clarifications for the PHOTOGRAPHY SERVICES RFP?"
    },

    {
        text: "To which address should we send our proposals for the RFP for the provision of FINANCIAL AUDIT OF THE “9F0759.02 – WWF MWIOPO POLICY WORKS” PROJECT?",

        value: "To which address should we send our proposals for the RFP for the provision of FINANCIAL AUDIT OF THE “9F0759.02 – WWF MWIOPO POLICY WORKS” PROJECT?"
    },

    {
        text: "What is the currency for the RFP for the provision of FINANCIAL AUDIT OF THE “9F0759.02 – WWF MWIOPO POLICY WORKS” PROJECT?",

        value: "What is the currency for the RFP for the provision of FINANCIAL AUDIT OF THE “9F0759.02 – WWF MWIOPO POLICY WORKS” PROJECT?"
    },

    {
        text: "When is the CASE MANAGEMENT SOLUTION FOR JUVENILE DEPENDENCY ATTORNEYS FOR THE STATE OF CALIFORNIA RFP due?",

        value: "When is the CASE MANAGEMENT SOLUTION FOR JUVENILE DEPENDENCY ATTORNEYS FOR THE STATE OF CALIFORNIA RFP due?"
    },

    {
        text: "How many references are required for the Case Management Solution for Juvenile Dependency Attorneys for the State of California RFP?",

        value: "How many references are required for the Case Management Solution for Juvenile Dependency Attorneys for the State of California RFP?"
    }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
