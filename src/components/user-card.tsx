import React from "react";
import { GetUserInfoReturns } from "zmp-sdk";
import { Avatar, Box, Text } from "zmp-ui";
import { IZaloUser } from "../interfaces";

interface UserProps {
  user: IZaloUser | null;
}

export const UserCard: React.FunctionComponent<UserProps> = ({ user }) => {
  return (
    <Box flex>
      <Avatar
        story="default"
        online
        src={user?.avatar.startsWith("http") ? user?.avatar : undefined}
      >
        {user?.avatar}
      </Avatar>
      <Box ml={4}>
        <Text.Title>{user?.name}</Text.Title>
        <Text>{user?.id}</Text>
      </Box>
    </Box>
  );
};