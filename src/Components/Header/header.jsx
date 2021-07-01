import { Button } from "@chakra-ui/button";
import { FormControl } from "@chakra-ui/form-control";
import { SearchIcon } from "@chakra-ui/icons";
import { InputLeftElement } from "@chakra-ui/input";
import { InputGroup } from "@chakra-ui/input";
import { InputRightElement } from "@chakra-ui/input";
import { Input } from "@chakra-ui/input";
import { Heading } from "@chakra-ui/layout"
import { MainGreen } from "../../Styles/colors";
import { BoxSize, Flex, LayoutGapWrapper } from "../../Styles/styles"
import TopBar from "../TopBar/top-bar";
import SingleUser from "../UserAvatar/SingelUser"
import { HeaderAndSearch, HeaderAndSearchInnerContent } from "./style"


const LeafHeaderandSearch = () => {

    return (
            <HeaderAndSearch>
                <LayoutGapWrapper>
                <TopBar />
                <HeaderAndSearchInnerContent>
                    <SingleUser desiredPhoto="company" />
                    <Flex>
                        <BoxSize flexSize="3" isInvisible={true}>
                            <Heading fontSize="2rem" mb="2" textAlign="left" fontWeight="300" color='white'>Lets change the world by finding you the best offsets!</Heading>
                            <InputGroup mt="2rem">
                                <InputLeftElement
                                pointerEvents="none"
                                children={<SearchIcon color="gray.600" />}
                                />
                                <Input type="text" placeholder="Search for offsets" background="white" />
                                <InputRightElement>
                                    <Button h="100%" left="0xp" size="sm" background={MainGreen} colorScheme="green">
                                        Go
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </BoxSize>
                        <BoxSize flexSize="3" isInvisible={true} style={{textAlign:'right', padding:'0'}}>
                        </BoxSize>

                    </Flex>
                </HeaderAndSearchInnerContent>
                </LayoutGapWrapper>
            </HeaderAndSearch>

    )
};

export default LeafHeaderandSearch;