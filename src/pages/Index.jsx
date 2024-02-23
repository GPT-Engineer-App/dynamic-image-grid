import React from "react";
import { Box, SimpleGrid, Image, useBreakpointValue, chakra } from "@chakra-ui/react";
import { FaArrowsAlt } from "react-icons/fa";

const rectangles = [
  { id: "rec1", width: "100%", height: "200px", bgColor: "red.200" },
  { id: "rec2", width: "100%", height: "150px", bgColor: "green.200" },
  { id: "rec3", width: "100%", height: "250px", bgColor: "blue.200" },
  { id: "rec4", width: "100%", height: "180px", bgColor: "yellow.200" },
  { id: "rec5", width: "100%", height: "220px", bgColor: "purple.200" },
  // Add more rectangles as needed
];

const DraggableImage = chakra(Image, {
  // This attaches drag-n-drop props and logic from react-beautiful-dnd to the Chakra Image component
  // Should be replaced with actual implementation once react-beautiful-dnd is available
  baseStyle: { cursor: "grab" },
});

import { useState } from "react";
import { Icon } from "@chakra-ui/react";
import { FaGripVertical } from "react-icons/fa";

const Index = () => {
  const columnCount = useBreakpointValue({ base: 2, md: 3, lg: 4 });
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <Box py={6} px={4}>
      {/* Placeholder for react-beautiful-dnd DragDropContext */}
      <SimpleGrid columns={columnCount} spacing={4}>
        {rectangles.map((rect) => (
          <Box key={rect.id} p={2} boxShadow="lg" rounded="md" backgroundColor={rect.bgColor} height={rect.height} width={rect.width} draggable="true" onDragStart={(e) => e.preventDefault()} onDrop={(e) => e.preventDefault()} onMouseEnter={() => setHoveredId(rect.id)} onMouseLeave={() => setHoveredId(null)}>
            {hoveredId === rect.id && (
              <Box position="absolute" bottom="2" right="2" color="gray.600">
                <Icon as={FaGripVertical} />
              </Box>
            )}
          </Box>
        ))}
      </SimpleGrid>
      {/* Placeholder for react-beautiful-dnd Droppable */}
    </Box>
  );
};

export default Index;
