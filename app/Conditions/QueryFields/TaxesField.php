<?php

namespace App\Conditions\QueryFields;

/**
 * Taxes Query Field Class.
 *
 * @copyright YetiForce Sp. z o.o
 * @license   YetiForce Public License 3.0 (licenses/LicenseEN.txt or yetiforce.com)
 * @author    Tomasz Kur <t.kur@yetiforce.com>
 * @author    Radosław Skrzypczak <r.skrzypczak@yetiforce.com>
 */
class TaxesField extends MultipicklistField
{
	/**
	 * Separator.
	 *
	 * @var string
	 */
	protected $separator = ',';
}
