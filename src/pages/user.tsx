import React from "react";
import {
  Avatar,
  List,
  Text,
  Box,
  Page,
  Button,
  Icon,
  useNavigate,
} from "zmp-ui";
import { useRecoilValue } from "recoil";
import { displayNameState, userState } from "../state";

export const UserPage = () => {
  const userInfo = useRecoilValue(userState);
  const displayName = useRecoilValue(displayNameState);
  const navigate = useNavigate();
  return (
    <Page className="page">
      <Box
        flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Avatar
            story="default"
            size={96}
            online
            src={userInfo?.avatar.startsWith("http") ? userInfo?.avatar : undefined}
          >
            {userInfo?.avatar}
          </Avatar>
        </Box>
        <Box flex flexDirection="row" alignItems="center" ml={8}>
          <Box>
            <Text.Title>{displayName || userInfo?.name}</Text.Title>
          </Box>
          <Box ml={4}>
            <Button
              onClick={() => {
                navigate("/form");
              }}
              size="small"
              icon={<Icon icon="zi-edit" />}
            />
          </Box>
        </Box>
      </Box>
      <Box m={0} p={0} mt={4}>
        <div className="section-container">
          <List>
            <List.Item title="Name" subTitle={userInfo?.name} />
            <List.Item title="Display Name" subTitle={displayName} />
            <List.Item title="ID" subTitle={userInfo?.id} />
          </List>
        </div>
      </Box>
    </Page>
  );
};