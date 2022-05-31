import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import "./Tab.css";

export const TabsList = () => {
  return (
    <div>
      <Tabs className="container">
        <TabList>
          <Tab className="btn">One</Tab>
          <Tab className="btn">Two</Tab>
          <Tab className="btn">Three</Tab>
        </TabList>
        <hr />

        <TabPanels>
          <TabPanel>
            <h1>One!</h1>
          </TabPanel>
          <TabPanel>
            <h1>Two!</h1>
          </TabPanel>
          <TabPanel>
            <h1>Three!</h1>
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* <Tabs variant="enclosed">
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <h1>one!</h1>
          </TabPanel>
          <TabPanel>
            <h1>two!</h1>
          </TabPanel>
          <TabPanel>
            <h1>three!</h1>
          </TabPanel>
        </TabPanels>
      </Tabs> */}
    </div>
  );
};
