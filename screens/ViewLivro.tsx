import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

export default function ViewLivro({ route }) {
  const { id } = route.params;
  const [livro, setLivro] = useState(null);

  useEffect(() => {
    fetchLivro();
  }, []);

  const fetchLivro = async () => {
    try {
      const response = await axios.get(`https://bibliotecaetecmaua.azurewebsites.net/api/LivrosSedeApi/${id}`);
      setLivro(response.data);
    } catch (error) {
      console.error("Erro ao buscar livro:", error);
    }
  };

  return (
    <View style={styles.container}>
      {livro && (
        <View>
          <View style={styles.box}>
            <View style={styles.imageContainer}>
              <Image source={{ uri: `https://bibliotecaetecmaua.azurewebsites.net/Content/Images/${livro.imagem}` }} style={styles.image} />
            </View>
            <Text style={styles.title}>{livro.titulo}</Text>
            <Text style={styles.detail}>{livro.autorPrincipal}</Text>
            <Text style={styles.detail}>Ano: {livro.ano}</Text>
            <Text style={styles.detail}>Editora: {livro.editora}</Text>
            <Text style={styles.detail}>Edição: {livro.edicao}</Text>
            <Text style={styles.detail}>Idioma: {livro.idioma}</Text>
            <Text style={styles.detail}>ISBN/ISSN: {livro.IsbnIssn}</Text>
            <Text style={styles.detail}>Material: {livro.material}</Text>
            <Text style={styles.detail}>Obra: {livro.obra}</Text>
          </View>
          <View style={styles.extraField}>
            <Text style={styles.extraText}>Autores: {livro.autores}</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CCCCCC',
    paddingHorizontal: 20,
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    width: '100%',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 300,
    resizeMode: 'contain',
    borderRadius: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    marginBottom: 5,
  },
  extraField: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  extraText: {
    fontSize: 16,
    color: 'black',
  },
});
