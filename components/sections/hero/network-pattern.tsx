"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Node {
  id: number;
  x: number;
  y: number;
  connections: number[];
}

interface NetworkPatternProps {
  mouseX: number;
  mouseY: number;
}

export function NetworkPattern({ mouseX, mouseY }: NetworkPatternProps) {
  const [nodes, setNodes] = useState<Node[]>([]);

  useEffect(() => {
    // Generate nodes
    const nodeCount = Math.floor((window.innerWidth * window.innerHeight) / 40000);
    const newNodes: Node[] = Array.from({ length: nodeCount }).map((_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      connections: [],
    }));

    // Create connections
    newNodes.forEach((node) => {
      const maxConnections = 2 + Math.floor(Math.random() * 2);
      const distances = newNodes
        .filter((n) => n.id !== node.id)
        .map((n) => ({
          id: n.id,
          distance: Math.sqrt(
            Math.pow(n.x - node.x, 2) + Math.pow(n.y - node.y, 2)
          ),
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, maxConnections);

      node.connections = distances.map((d) => d.id);
    });

    setNodes(newNodes);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <motion.svg
        width="100%"
        height="100%"
        className="absolute inset-0"
        animate={{ x: mouseX * 0.5, y: mouseY * 0.5 }}
        transition={{ type: "spring", damping: 30, stiffness: 50 }}
      >
        {/* Connections */}
        {nodes.map((node) =>
          node.connections.map((connectionId) => {
            const connectedNode = nodes[connectionId];
            if (!connectedNode) return null;
            return (
              <motion.line
                key={`${node.id}-${connectionId}`}
                x1={node.x}
                y1={node.y}
                x2={connectedNode.x}
                y2={connectedNode.y}
                stroke="currentColor"
                strokeWidth="0.5"
                strokeOpacity="0.3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            );
          })
        )}

        {/* Nodes */}
        {nodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r="2"
            fill="currentColor"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.5, 1] }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </motion.svg>
    </div>
  );
}