import { RiLoginBoxLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

import { HStack, IconButton, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Props {
  token: string | null;
}

export default function ({ token }: Props) {
  const navigate = useNavigate();
  return (
    <>
      <HStack as="header" justify="space-between" bg="white">
        <HStack as="nav">
          <IconButton
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="74"
                height="32"
                viewBox="0 0 74 32"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M51.6645 4.03989H61.9882C62.6713 4.03989 63.7072 4.03989 64.3926 4.71793C65.0782 5.39133 65.0782 6.40251 65.0782 7.0809V17.1967C65.0782 17.8675 65.0782 18.8845 64.3926 19.5553C63.7072 20.2303 62.6713 20.2303 61.9882 20.2303H57.0013C56.1409 20.2303 55.0213 20.2303 54.5925 19.301C54.162 18.376 54.7639 17.5322 55.2807 16.8572L61.7308 8.82759H51.2991L47.5448 13.4891L47.5373 13.499C46.8514 14.3981 46.2564 15.1781 46.2564 16.184C46.2564 17.1967 46.8081 17.927 47.5448 18.8845L48.5798 20.2303C49.6039 21.5785 50.6391 22.9294 52.0134 23.6035C53.392 24.2759 55.0213 24.2759 57.2587 24.2759H61.7308C64.3066 24.2759 68.1794 24.2759 70.7549 21.7498C73.3334 19.2184 73.3334 15.5106 73.3334 14.1582V10.1126C73.3334 8.76352 73.3334 5.05427 70.7549 2.52749C68.1794 0 64.3066 0 61.7308 0H54.5925C53.9071 0 53.0459 0 52.3612 0.671624C51.6645 1.34681 51.6645 2.18723 51.6645 2.86384V4.03989ZM39.3862 8.8276H49.641L37.3343 24.2759H27.0769L39.3862 8.8276ZM0.67091 9.4653C0 10.1105 0 10.9153 0 11.5564V12.6842H4.02865V32H12.0847V12.6842H19.9666C20.8106 12.6842 21.8996 12.6842 22.3224 13.5696C22.7409 14.4591 22.1542 15.2648 21.6481 15.9057L15.1022 24.2774H25.174L29.2012 19.1263C29.8787 18.2626 30.4615 17.5153 30.4615 16.5485C30.4615 15.5881 29.9184 14.8934 29.2085 13.9854L29.2012 13.9761L28.1989 12.6842L28.1697 12.6471C27.1675 11.3742 26.1676 10.1043 24.837 9.4653C23.4967 8.8276 21.8996 8.8276 19.7194 8.8276H2.85358C2.17913 8.8276 1.34359 8.8276 0.67091 9.4653Z"
                  fill="currentColor"
                ></path>
              </svg>
            }
            aria-label="Home Page"
            w="104px"
            h="56px"
            colorScheme="red"
            borderRadius={0}
            objectFit="cover"
            cursor="pointer"
            onClick={() => navigate("/")}
          />
        </HStack>
        <HStack py={2} px={4}>
          {!token ? (
            <>
              <Button
                variant="ghost"
                leftIcon={<RiLoginBoxLine size="16px" />}
                onClick={() => navigate("/login")}
              >
                Войти
              </Button>
            </>
          ) : (
            <IconButton
              icon={<CgProfile />}
              aria-label="Profile"
              onClick={() => navigate("/me")}
            />
          )}
        </HStack>
      </HStack>
    </>
  );
}
