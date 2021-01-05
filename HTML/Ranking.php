
<?php

//Conexão e consulta ao Mysql
$connect = mysqli_connect('localhost','root','', 'tetris');
$query_select = "SELECT * FROM pontuacao ORDER BY PONTUACAO DESC";
$qry = mysqli_query($connect, $query_select);
 
//Pegando os nomes dos campos
$num_fields = mysqli_num_fields($qry);//Obtém o número de campos do resultado
 
for($i = 0;$i<$num_fields; $i++){//Pega o nome dos campos
	$fields[] = mysqli_field_name($qry,$i);
}
 
//Montando o cabeçalho da tabela
$table = '<table border="1"><tr>';
 
for($i = 0;$i < $num_fields; $i++){
	$table .= '<th>'.$fields[$i].'</th>';
}
 
//Montando o corpo da tabela
$table .= '<tbody>';
while($r = mysqli_fetch_array($qry)){
	$table .= '<tr>';
	for($i = 0;$i < $num_fields; $i++){
		$table .= '<td>'.$r[$fields[$i]].'</td>';
	}
	$table .= '</tr>';
}
 
//Finalizando a tabela
$table .= '</tbody></table>';
 
function mysqli_field_name($result, $field_offset)
{
    $properties = mysqli_fetch_field_direct($result, $field_offset);
    return is_object($properties) ? $properties->name : null;
}
//Imprimindo a tabela
echo $table;
 
?>