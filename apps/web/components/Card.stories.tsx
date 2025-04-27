import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Button } from "./Button";
// Import the image to let the bundler handle it
import CleoImage from "../stories/assets/cleo.jpeg";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Card.Header>
          <Card.Title>Default Card Title</Card.Title>
        </Card.Header>
        <Card.Content>
          <Card.Description>
            This is the main content area using Card.Content and
            Card.Description.
          </Card.Description>
        </Card.Content>
        <Card.Footer>
          <Button variant="primary">Cancel</Button>
          <Button>Confirm</Button>
        </Card.Footer>
      </>
    ),
    style: { width: "350px" },
  },
};

export const WithImage: Story = {
  args: {
    children: (
      <>
        <Card.Image
          src={CleoImage.src}
          alt="Cleo the cat"
          width={CleoImage.width}
          height={CleoImage.height}
        />
        <Card.Header>
          <Card.Title>Card with Image</Card.Title>
        </Card.Header>
        <Card.Content>
          {" "}
          {/* Ensure full structure is present */}
          <Card.Description>
            The image appears above the header here.
          </Card.Description>
        </Card.Content>
        <Card.Footer>
          {" "}
          {/* Ensure full structure is present */}
          <Button>View Details</Button>
        </Card.Footer>
      </>
    ),
    style: { width: "350px" },
  },
};

export const ImageInsideContent: Story = {
  args: {
    children: (
      <>
        <Card.Header>
          <Card.Title>Image Inside Content</Card.Title>
        </Card.Header>
        <Card.Content>
          <Card.Image
            src={CleoImage.src} // Access the 'src' property
            alt="Placeholder Image"
            width={CleoImage.width} // Add width prop from imported image
            height={CleoImage.height} // Add height prop from imported image
            style={{ borderRadius: "8px" }}
          />
          <Card.Description>
            You can also place images within the content section.
          </Card.Description>
        </Card.Content>
        <Card.Footer>
          {" "}
          {/* Ensure full structure is present */}
          <Button>Action</Button>
        </Card.Footer>
      </>
    ),
    style: { width: "350px" },
  },
};

export const HeaderAndFooterOnly: Story = {
  args: {
    children: (
      <>
        <Card.Header>
          <Card.Title>Status Update</Card.Title>
        </Card.Header>
        {/* No Card.Content */}
        <Card.Footer>
          <Button>Refresh</Button>
        </Card.Footer>
      </>
    ),
    style: { width: "350px" },
  },
};

export const ComplexContent: Story = {
  args: {
    children: (
      <>
        <Card.Header>
          <Card.Title>Complex Layout</Card.Title>
          {/* Can add subtitle elements directly here */}
          <p
            style={{
              margin: 0,
              fontSize: "0.9rem",
              color: "var(--text-color-secondary)",
            }}
          >
            Subtitle or extra header info
          </p>
        </Card.Header>
        <Card.Content>
          <Card.Description>
            Mixing different elements within the content section.
          </Card.Description>
          <ul>
            <li>Point 1</li>
            <li>Point 2</li>
          </ul>
          <Card.Description>Another paragraph of description.</Card.Description>
        </Card.Content>
        <Card.Footer>
          <Button variant="primary">Learn More</Button>
          <Button>Sign Up</Button>
        </Card.Footer>
      </>
    ),
    style: { width: "350px" },
  },
};
