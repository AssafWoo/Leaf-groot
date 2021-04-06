import { Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger } from "@chakra-ui/popover"
import { useRef } from "react"

const Popup = ({trigger, header, content, actionTrigger }) => {
    const initialFocusRef = useRef()
    return (
      <Popover
        initialFocusRef={initialFocusRef}
        placement="bottom"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          {/* <Button>Trigger</Button> */}
          {trigger}
        </PopoverTrigger>
        <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
          <PopoverHeader pt={4} fontWeight="bold" border="0">
            {header}
          </PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            {content}
          </PopoverBody>
          <PopoverFooter
            border="0"
            d="flex"
            alignItems="center"
            justifyContent="space-between"
            pb={4}
          >
              {/* <Button colorScheme="blue" ref={initialFocusRef}>
                Next
              </Button> */}
              {actionTrigger}
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    )
  }

  export default Popup;