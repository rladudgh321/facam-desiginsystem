import React from 'react';
import { describe, expect, it } from "vitest";
import { render, screen } from '../../../test/test-utils';
import { composeStories } from '@storybook/react'
import * as stories from './Accordion.stories';

const { AccordionTestStory } = composeStories(stories);

describe("Accordion 컴포넌트 기능 테스트", () => {
  it('Accordion 버튼 클릭 시 AccordionPanel 펼쳐지는지 확인', async () => {
    //Given
    const args = {
      items: [
        {
          name: "목록1",
          content: "목록1 내용입니다.",
        },
      ],
      defaultActiveItems: [],
    };

    //When

    render(<AccordionTestStory {...args} />);

    expect(screen.getByTestId('panel-0')).toHaveAttribute(
      "data-action-item",
      "false",
    )

    //then
    await screen.getByTestId('button-0').click();
    expect(screen.getByTestId('panel-0')).toHaveAttribute(
      "data-action-item",
      "true"
    )
  });

  it("두번쨰 Accordion버튼 클릭시 두번쨰 AccordionPanel만 펼쳐지는지 확인", async () => {
    //Given
    const args = {
      items: [
        {
          name: "목록1",
          content: "목록1 내용입니다.",
        },
        {
          name: "목록2",
          content: "목록2 내용입니다.",
        },
      ],
      defaultActiveItems: [],
    };
    // When
    render(<AccordionTestStory {...args} />)
    expect(screen.getByTestId('panel-0')).toHaveAttribute(
      "data-action-item",
      "false"
    );
    expect(screen.getByTestId('panel-1')).toHaveAttribute(
      "data-action-item",
      "false"
    );

    //then
    await screen.getByTestId('button-1').click();
    expect(screen.getByTestId('panel-1')).toHaveAttribute(
      "data-action-item",
      "true"
    );
  })

  it('활성화 되어있는 Accordion 버튼 클릭 시 AccordionPanel 접히는지 확인', async () => {
    //Given
    const args = {
      items: [
        {
          name: "목록1",
          content: "목록1 내용입니다.",
        },
      ],
      defaultActiveItems: [],
    };
    render(<AccordionTestStory {...args} />)
    
    //When
    await screen.getByTestId('button-0').click();

    expect(screen.getByTestId('panel-0')).toHaveAttribute(
      "data-action-item",
      "true"
    )

    //then

    await screen.getByTestId('button-0').click();
    expect(screen.getByTestId('panel-0')).toHaveAttribute(
      "data-action-item",
      "false"
    )
  });

  it("defaultActiveItems에 itemName이 있을 경우, 초기 렌더링 시 AccordionPanel 펼쳐져 있는지 확인", async () => {
    //Given
    const args = {
      items: [
        {
          name: "목록1",
          content: "목록1 내용입니다.",
        },
      ],
      defaultActiveItems: ['목록1'],
    };

    //When
    render(<AccordionTestStory {...args} />)
    expect(screen.getByTestId("panel-0")).toHaveAttribute(
      "data-action-item",
      "true",
    )
  })
})