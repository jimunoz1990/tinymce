import { Assert, UnitTest } from '@ephox/bedrock-client';
import { Arr } from '@ephox/katamari';
import { Css, SugarElement } from '@ephox/sugar';
import * as CopySelected from 'ephox/snooker/api/CopySelected';

const SEL_CLASS = 'copy-selected';

interface TestCase {
  label: string;
  expectedWidth: string;
  table: string;
}

const assertWidth = (testCase: TestCase) => () => {
  const table = SugarElement.fromHtml<HTMLTableElement>(testCase.table);
  const replica = CopySelected.extract(table, `.${SEL_CLASS}`);
  const tableWidth = Css.get(replica, 'width');
  Assert.eq(testCase.label, testCase.expectedWidth, tableWidth);
};

const testCases: TestCase[] = [
  {
    label: 'TINY-6664: Assert table width - pixel width single column',
    expectedWidth: '473.66px',
    table: (
      `<table style="border-collapse: collapse; width: 1036px; height: 235px;" border="1">
        <tbody>
          <tr>
            <td style="width: 330px;">&nbsp;</td>
            <td style="width: 209px;">&nbsp;</td>
            <td class="${SEL_CLASS}" style="width: 454px;">&nbsp;</td>
          </tr>
          <tr>
            <td style="width: 330px;">&nbsp;</td>
            <td style="width: 209px;">&nbsp;</td>
            <td class="${SEL_CLASS}" style="width: 454px;">&nbsp;</td>
          </tr>
        </tbody>
      </table>`
    ),
  },
  {
    label: 'TINY-6664: Assert table width - pixel width multiple columns',
    expectedWidth: '691.71px',
    table: (
      `<table style="border-collapse: collapse; width: 1036px; height: 235px;" border="1">
        <tbody>
          <tr>
            <td style="width: 330px;">&nbsp;</td>
            <td class="${SEL_CLASS}" style="width: 209px;">&nbsp;</td>
            <td class="${SEL_CLASS}" style="width: 454px;">&nbsp;</td>
          </tr>
          <tr>
            <td style="width: 330px;">&nbsp;</td>
            <td class="${SEL_CLASS}" style="width: 209px;">&nbsp;</td>
            <td class="${SEL_CLASS}" style="width: 454px;">&nbsp;</td>
          </tr>
        </tbody>
      </table>`
    ),
  },
  {
    label: 'TINY-6664: Assert table width - pixel width entire table',
    expectedWidth: '1036px',
    table: (
      `<table style="border-collapse: collapse; width: 1036px; height: 235px;" border="1">
        <tbody>
          <tr>
          <td class="${SEL_CLASS}" style="width: 330px;">&nbsp;</td>
            <td class="${SEL_CLASS}" style="width: 209px;">&nbsp;</td>
            <td class="${SEL_CLASS}" style="width: 454px;">&nbsp;</td>
          </tr>
          <tr>
          <td class="${SEL_CLASS}" style="width: 330px;">&nbsp;</td>
            <td class="${SEL_CLASS}" style="width: 209px;">&nbsp;</td>
            <td class="${SEL_CLASS}" style="width: 454px;">&nbsp;</td>
          </tr>
        </tbody>
      </table>`
    ),
  },
  {
    label: 'TINY-6664: Assert table width - relative width single column',
    expectedWidth: '21.1173%',
    table: (
      `<table style="border-collapse: collapse; width: 63.352%; height: 258px;" border="1">
        <tbody>
          <tr>
            <td style="width: 32.7674%;">&nbsp;</td>
            <td style="width: 32.7674%;">&nbsp;</td>
            <td class="${SEL_CLASS}" style="width: 32.7674%;">&nbsp;</td>
          </tr>
          <tr>
            <td style="width: 32.7674%;">&nbsp;</td>
            <td style="width: 32.7674%;">&nbsp;</td>
            <td class="${SEL_CLASS}" style="width: 32.7674%;">&nbsp;</td>
          </tr>
          <tr>
            <td style="width: 32.7674%;">&nbsp;</td>
            <td style="width: 32.7674%;">&nbsp;</td>
            <td class="${SEL_CLASS}" style="width: 32.7674%;">&nbsp;</td>
          </tr>
        </tbody>
      </table>`
    ),
  },
  {
    label: 'TINY-6664: Assert table width - relative width multiple columns',
    expectedWidth: '42.2347%',
    table: (
      `<table style="border-collapse: collapse; width: 63.352%; height: 258px;" border="1">
        <tbody>
          <tr>
            <td style="width: 32.7674%;">&nbsp;</td>
            <td class="${SEL_CLASS}" style="width: 32.7674%;">&nbsp;</td>
            <td class="${SEL_CLASS}" style="width: 32.7674%;">&nbsp;</td>
          </tr>
          <tr>
            <td style="width: 32.7674%;">&nbsp;</td>
            <td class="${SEL_CLASS}" style="width: 32.7674%;">&nbsp;</td>
            <td class="${SEL_CLASS}" style="width: 32.7674%;">&nbsp;</td>
          </tr>
          <tr>
            <td style="width: 32.7674%;">&nbsp;</td>
            <td class="${SEL_CLASS}" style="width: 32.7674%;">&nbsp;</td>
            <td class="${SEL_CLASS}" style="width: 32.7674%;">&nbsp;</td>
          </tr>
        </tbody>
      </table>`
    ),
  },
  {
    label: 'TINY-6664: Assert table width - relative width entire table',
    expectedWidth: '63.352%',
    table: (
      `<table style="border-collapse: collapse; width: 63.352%; height: 258px;" border="1">
        <tbody>
          <tr>
            <td class="${SEL_CLASS}" style="width: 32.7674%;">&nbsp;</td>
            <td class="${SEL_CLASS}" style="width: 32.7674%;">&nbsp;</td>
            <td class="${SEL_CLASS}" style="width: 32.7674%;">&nbsp;</td>
          </tr>
          <tr>
            <td class="${SEL_CLASS}" style="width: 32.7674%;">&nbsp;</td>
            <td class="${SEL_CLASS}" style="width: 32.7674%;">&nbsp;</td>
            <td class="${SEL_CLASS}" style="width: 32.7674%;">&nbsp;</td>
          </tr>
          <tr>
            <td class="${SEL_CLASS}" style="width: 32.7674%;">&nbsp;</td>
            <td class="${SEL_CLASS}" style="width: 32.7674%;">&nbsp;</td>
            <td class="${SEL_CLASS}" style="width: 32.7674%;">&nbsp;</td>
          </tr>
        </tbody>
      </table>`
    ),
  },
  {
    label: 'TINY-6664: Assert table width - responsive single column',
    expectedWidth: '',
    table: (
      `<table style="border-collapse: collapse;" border="1">
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="${SEL_CLASS}">&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td class="${SEL_CLASS}">&nbsp;</td>
          </tr>
        </tbody>
      </table>`
    ),
  },
  {
    label: 'TINY-6664: Assert table width - responsive multiple columns',
    expectedWidth: '',
    table: (
      `<table style="border-collapse: collapse;" border="1">
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <td class="${SEL_CLASS}">&nbsp;</td>
            <td class="${SEL_CLASS}">&nbsp;</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td class="${SEL_CLASS}">&nbsp;</td>
            <td class="${SEL_CLASS}">&nbsp;</td>
          </tr>
        </tbody>
      </table>`
    ),
  },
  {
    label: 'TINY-6664: Assert table width - responsive entire table',
    expectedWidth: '',
    table: (
      `<table style="border-collapse: collapse;" border="1">
        <tbody>
          <tr>
            <td class="${SEL_CLASS}">&nbsp;</td>
            <td class="${SEL_CLASS}">&nbsp;</td>
            <td class="${SEL_CLASS}">&nbsp;</td>
          </tr>
          <tr>
            <td class="${SEL_CLASS}">&nbsp;</td>
            <td class="${SEL_CLASS}">&nbsp;</td>
            <td class="${SEL_CLASS}">&nbsp;</td>
          </tr>
        </tbody>
      </table>`
    ),
  },
];

Arr.each(testCases, (testCase) => {
  UnitTest.test(testCase.label, assertWidth(testCase));
});